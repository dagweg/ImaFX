"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
function blobToBuffer(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        return Buffer.from(yield blob.arrayBuffer());
    });
}
function applyGrayscaleEffect(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imageBuffer = yield blobToBuffer(blob);
            const grayscaleImage = yield (0, sharp_1.default)(imageBuffer).grayscale(true).toBuffer();
            return grayscaleImage;
        }
        catch (error) {
            console.error("Error applying grayscale effect:", error);
            throw error;
        }
    });
}
// Function to create a sepia image
function applySepiaEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Sepia effect and return the new URL
    });
}
// Function to create a vintage image
function applyVintageEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Vintage effect and return the new URL
    });
}
// Function to create a black and white image
function applyBlackAndWhiteEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Black and White effect and return the new URL
    });
}
// Function to create a cartoonized image
function applyCartoonizeEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Cartoonize effect and return the new URL
    });
}
// Function to create an oil painting image
function applyOilPaintingEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Oil Painting effect and return the new URL
    });
}
// Function to create a watercolor image
function applyWatercolorEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Watercolor effect and return the new URL
    });
}
// Function to apply blur effect
function applyBlurEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Blur effect and return the new URL
    });
}
// Function to apply sharpen effect
function applySharpenEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Sharpen effect and return the new URL
    });
}
// Function to apply noise reduction effect
function applyNoiseReductionEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Noise Reduction effect and return the new URL
    });
}
// Function to adjust brightness and contrast
function applyBrightnessContrastEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Brightness/Contrast effect and return the new URL
    });
}
// Function to adjust saturation
function applySaturationEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Saturation effect and return the new URL
    });
}
// Function to adjust hue and saturation
function applyHueSaturationEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Hue/Saturation effect and return the new URL
    });
}
// Function to adjust color balance
function applyColorBalanceEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Color Balance effect and return the new URL
    });
}
// Function to colorize an image
function applyColorizeEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Colorize effect and return the new URL
    });
}
// Function to apply color splash effect
function applyColorSplashEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Color Splash effect and return the new URL
    });
}
// Function to crop an image
function applyCropEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Crop effect and return the new URL
    });
}
// Function to resize an image
function applyResizeEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Resize effect and return the new URL
    });
}
// Function to rotate an image
function applyRotateEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Rotate effect and return the new URL
    });
}
// Function to flip an image
function applyFlipEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Flip effect and return the new URL
    });
}
// Function to auto-enhance an image
function applyAutoEnhanceEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Auto-enhance effect and return the new URL
    });
}
// Function to denoise an image
function applyDenoiseEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Denoise effect and return the new URL
    });
}
// Function to auto-correct an image
function applyAutoCorrectEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Auto-correct effect and return the new URL
    });
}
// Function to create a pixelated image
function applyPixelationEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Pixelation effect and return the new URL
    });
}
// Function to remove background
function applyRemoveBackgroundEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Remove background effect and return the new URL
    });
}
// Function to add decorative frames
function applyAddDecorativeFramesEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Add Decorative Frames effect and return the new URL
    });
}
// Function to add borders
function applyAddBordersEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Add Borders effect and return the new URL
    });
}
// Function to compress and save an image
function applyCompressAndSaveEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Compress & save effect and return the new URL
    });
}
// Function to create an anaglyph image
function applyCreateAnaglyphEffect(imageURL) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the Create Anaglyph effect and return the new URL
    });
}
// why is this not being accepted as import in the express backend????????????????
const effectMapping = {
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
exports.default = effectMapping;
