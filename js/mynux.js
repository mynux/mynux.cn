function doSignature(origin_str, algorithmSelected) {
    if (origin_str != '') {
        var hash = '';
        switch (algorithmSelected) {
            case "MD5":
                hash = CryptoJS.MD5(origin_str);
                break;

            case "SHA1":
                hash = CryptoJS.SHA1(origin_str);
                break;

            case 'SHA256':
                hash = CryptoJS.SHA256(origin_str);
                break;

            case 'SHA512':
                hash = CryptoJS.SHA512(origin_str);
                break;
        }
        return hash;
    }
}
