function getFilePath() {
    return new Promise(resolve => {
        var scriptPath = document.currentScript.src;
        var filePath = scriptPath.replace(/\/[^\/]+$/, '') + '/goog.swf';
        resolve(filePath);
    });
}