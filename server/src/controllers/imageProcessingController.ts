import sharp from "../../node_modules/sharp/lib/index";
// import blobToBuffer from 'blob-to-buffer'


async function blobToBuffer(buffer: Buffer) {
    // sharp(imageFile) //no overload matches this call
}


async function applyGrayscaleEffect(buffer: Buffer) {
    try {
        const processedImageBuffer = await sharp(buffer)
            .grayscale(true)
            .jpeg()
            .toBuffer()

        const b64Image = await processedImageBuffer.toString('base64')
        return b64Image
    }
    catch (error) {
        console.log(error)
    }
}

// Function to create a sepia image
async function applySepiaEffect(buffer: Buffer) {
    // Implement the Sepia effect and return the new URL
}

// Function to create a vintage image
async function applyVintageEffect(buffer: Buffer) {
    // Implement the Vintage effect and return the new URL
}

// Function to create a black and white image
async function applyBlackAndWhiteEffect(buffer: Buffer) {
    // Implement the Black and White effect and return the new URL
}

// Function to create a cartoonized image
async function applyCartoonizeEffect(buffer: Buffer) {
    // Implement the Cartoonize effect and return the new URL
}

// Function to create an oil painting image
async function applyOilPaintingEffect(buffer: Buffer) {
    // Implement the Oil Painting effect and return the new URL
}

// Function to create a watercolor image
async function applyWatercolorEffect(buffer: Buffer) {
    // Implement the Watercolor effect and return the new URL
}

// Function to apply blur effect
async function applyBlurEffect(buffer: Buffer) {
    // Implement the Blur effect and return the new URL
}

// Function to apply sharpen effect
async function applySharpenEffect(buffer: Buffer) {
    // Implement the Sharpen effect and return the new URL
}

// Function to apply noise reduction effect
async function applyNoiseReductionEffect(buffer: Buffer) {
    // Implement the Noise Reduction effect and return the new URL
}

// Function to adjust brightness and contrast
async function applyBrightnessContrastEffect(buffer: Buffer) {
    // Implement the Brightness/Contrast effect and return the new URL
}

// Function to adjust saturation
async function applySaturationEffect(buffer: Buffer) {
    // Implement the Saturation effect and return the new URL
}

// Function to adjust hue and saturation
async function applyHueSaturationEffect(buffer: Buffer) {
    // Implement the Hue/Saturation effect and return the new URL
}

// Function to adjust color balance
async function applyColorBalanceEffect(buffer: Buffer) {
    // Implement the Color Balance effect and return the new URL
}

// Function to colorize an image
async function applyColorizeEffect(buffer: Buffer) {
    // Implement the Colorize effect and return the new URL
}

// Function to apply color splash effect
async function applyColorSplashEffect(buffer: Buffer) {
    // Implement the Color Splash effect and return the new URL
}

// Function to crop an image
async function applyCropEffect(buffer: Buffer) {
    // Implement the Crop effect and return the new URL
}

// Function to resize an image
async function applyResizeEffect(buffer: Buffer) {
    // Implement the Resize effect and return the new URL
}

// Function to rotate an image
async function applyRotateEffect(buffer: Buffer) {
    // Implement the Rotate effect and return the new URL
}

// Function to flip an image
async function applyFlipEffect(buffer: Buffer) {
    // Implement the Flip effect and return the new URL
}

// Function to auto-enhance an image
async function applyAutoEnhanceEffect(buffer: Buffer) {
    // Implement the Auto-enhance effect and return the new URL
}

// Function to denoise an image
async function applyDenoiseEffect(buffer: Buffer) {
    // Implement the Denoise effect and return the new URL
}

// Function to auto-correct an image
async function applyAutoCorrectEffect(buffer: Buffer) {
    // Implement the Auto-correct effect and return the new URL
}

// Function to create a pixelated image
async function applyPixelationEffect(buffer: Buffer) {
    // Implement the Pixelation effect and return the new URL
}

// Function to remove background
async function applyRemoveBackgroundEffect(buffer: Buffer) {
    // Implement the Remove background effect and return the new URL
}

// Function to add decorative frames
async function applyAddDecorativeFramesEffect(buffer: Buffer) {
    // Implement the Add Decorative Frames effect and return the new URL
}

// Function to add borders
async function applyAddBordersEffect(buffer: Buffer) {
    // Implement the Add Borders effect and return the new URL
}

// Function to compress and save an image
async function applyCompressAndSaveEffect(buffer: Buffer) {
    // Implement the Compress & save effect and return the new URL
}

// Function to create an anaglyph image
async function applyCreateAnaglyphEffect(buffer: Buffer) {
    // Implement the Create Anaglyph effect and return the new URL

}


// why is this not being accepted as import in the express backend????????????????
// type EffectFunction = (input: Blob) => any
const effectMapping: { [key: string]: (input: Buffer) => any } = {
    'Grayscale': applyGrayscaleEffect,
    'Sepia': applySepiaEffect,
    'Vintage': applyVintageEffect,
    'Black and White': applyBlackAndWhiteEffect,
    'Cartoonize': applyCartoonizeEffect,
    'Oil Painting': applyOilPaintingEffect,
    'Watercolor': applyWatercolorEffect,
    'Blur': applyBlurEffect,
    'Sharpen': applySharpenEffect,
    'Noise Reduction': applyNoiseReductionEffect,
    'Brightness/Contrast': applyBrightnessContrastEffect,
    'Saturation': applySaturationEffect,
    'Hue/Saturation': applyHueSaturationEffect,
    'Color Balance': applyColorBalanceEffect,
    'Colorize': applyColorizeEffect,
    'Color Splash': applyColorSplashEffect,
    'Crop': applyCropEffect,
    'Resize': applyResizeEffect,
    'Rotate': applyRotateEffect,
    'Flip': applyFlipEffect,
    'Auto-enhance': applyAutoEnhanceEffect,
    'Denoise': applyDenoiseEffect,
    'Auto-correct': applyAutoCorrectEffect,
    'Pixelation': applyPixelationEffect,
    'Remove background': applyRemoveBackgroundEffect,
    'Add Decorative Frames': applyAddDecorativeFramesEffect,
    'Add Borders': applyAddBordersEffect,
    'Compress & save': applyCompressAndSaveEffect,
    'Create Anaglyph': applyCreateAnaglyphEffect,
};

export default effectMapping



