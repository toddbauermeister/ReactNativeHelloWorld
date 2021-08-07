import systemConstants from "../Utility/SystemConstants";
import { get } from "./ApiHandler";

const ApiCatFacts = async () => {
    const baseUrl = systemConstants.apiConstants.apiCatFacts.baseUrl;
    const endpointCats = systemConstants.apiConstants.apiCatFacts.endpointCatFacts
    const fullPath = `${baseUrl}${endpointCats}`;

    return await get(fullPath);
};

export default ApiCatFacts