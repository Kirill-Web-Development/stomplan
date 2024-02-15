import '../node_modules/semantic-ui-css/semantic.min.css'
import './styles/index.css'

import './js/shared';
import { services } from "./js/services";
import { _buildTreeModel, _renderTree } from "./js/entities/tree";
import { getRoot } from "./js/helpers/root.helper";
import { displayError} from './js/helpers/errors.helper';

services.fakeApi.request()
    .then(data => {
        const treeModel = _buildTreeModel(data);
        const renderedTree = _renderTree(treeModel)
        getRoot().append(renderedTree);

    })
    .catch(e => {
        if (e.code === 'RECIEVING_ERROR') return;
        displayError('Rendering error')
        console.log(e)
    })
