export function GetRootURL() {
    if (process.env.NODE_ENV === 'production') {
        return "";
    }
    return "localhost:5001/";
}