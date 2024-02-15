import { loadingHelper, errorsHelper, cleanRoot} from "../helpers";
import { displayError } from "../helpers/errors.helper";

export class fakeApi {
    static fetchOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    }
    static BASE_URL = 'https://kirill-web-development.github.io/stomplan/db.json'
    static BASE_ENTITY = 'services'
    static async request(URL = fakeApi.BASE_URL, requestEntity = fakeApi.BASE_ENTITY, options = fakeApi.fetchOptions) {
        try {
            cleanRoot();
            loadingHelper.displayLoading();
            const response = await fetch(URL, options);

            if (!response.ok) {
                errorsHelper.throwCustomError('Server error', 'RECIEVING_ERROR')
            }

            const data = await response.json();
            if (!data || data.length === 0 || (requestEntity && (!data[requestEntity] || data[requestEntity].length === 0))) {
                errorsHelper.throwCustomError('Data is empty', 'RECIEVING_ERROR')
            }
            loadingHelper.removeLoading()
            return data[requestEntity] || data
        } catch(e) {
            if (e.code === 'RECIEVING_ERROR') {
                displayError(`Error while receiving data : ${e.message}`)
                console.log(e)
            }
            throw e
        }
    }
}
