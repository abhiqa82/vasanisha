# PowerShell script to compress and optimize logo image
param(
    [Parameter(Mandatory=$true)]
    [string]$InputImagePath,
    
    [Parameter(Mandatory=$false)]
    [string]$OutputPath = "images/logo/vasanisha-logo.png",
    
    [Parameter(Mandatory=$false)]
    [int]$MaxWidth = 200,
    
    [Parameter(Mandatory=$false)]
    [int]$Quality = 85
)

Add-Type -AssemblyName System.Drawing

try {
    # Load the image
    $image = [System.Drawing.Image]::FromFile((Resolve-Path $InputImagePath))
    
    # Calculate new dimensions maintaining aspect ratio
    $ratio = $image.Height / $image.Width
    $newWidth = $MaxWidth
    $newHeight = [int]($MaxWidth * $ratio)
    
    # Create a new bitmap with the new dimensions
    $bitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Set high quality rendering
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    # Draw the resized image
    $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
    
    # Save as PNG with compression
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/png" }
    
    # Ensure output directory exists
    $outputDir = Split-Path -Parent $OutputPath
    if (-not (Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    $bitmap.Save((Resolve-Path (Split-Path -Parent $OutputPath)).Path + "\" + (Split-Path -Leaf $OutputPath), $codec, $encoderParams)
    
    # Clean up
    $graphics.Dispose()
    $bitmap.Dispose()
    $image.Dispose()
    
    Write-Host "Image compressed and saved to: $OutputPath" -ForegroundColor Green
    
    # Get file size
    $fileInfo = Get-Item $OutputPath
    Write-Host "File size: $([math]::Round($fileInfo.Length / 1KB, 2)) KB" -ForegroundColor Green
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
    exit 1
}

