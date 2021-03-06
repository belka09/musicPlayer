"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("tns-core-modules/file-system");
var types_1 = require("tns-core-modules/utils/types");
var TNSPlayerUtil = (function () {
    function TNSPlayerUtil() {
    }
    TNSPlayerUtil.debug = false;
    return TNSPlayerUtil;
}());
exports.TNSPlayerUtil = TNSPlayerUtil;
exports.TNS_Player_Log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (TNSPlayerUtil.debug) {
        console.log('NativeScript-Audio-Player - TNSPlayer', args);
    }
};
function isStringUrl(value) {
    var isURL = false;
    if (value.indexOf('://') !== -1) {
        if (value.indexOf('res://') === -1) {
            isURL = true;
        }
    }
    if (isURL === true) {
        return true;
    }
    else {
        return false;
    }
}
exports.isStringUrl = isStringUrl;
function resolveAudioFilePath(path) {
    if (path) {
        var isUrl = isStringUrl(path);
        if (isUrl === true) {
            return path;
        }
        else {
            var audioPath = void 0;
            var fileName = types_1.isString(path) ? path.trim() : '';
            if (fileName.indexOf('~/') === 0) {
                fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace('~/', ''));
                audioPath = fileName;
            }
            else {
                audioPath = fileName;
            }
            return audioPath;
        }
    }
}
exports.resolveAudioFilePath = resolveAudioFilePath;
//# sourceMappingURL=common.js.map