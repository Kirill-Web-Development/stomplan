const _nodeInterface = (text, children) =>  {
    const nodeUI = document.createElement('li');

    const iconClass = children && children.length > 0 ? 'folder icon' : 'file icon';

    nodeUI.innerHTML = `
    <div class='item'>
            <i class="${iconClass} big"></i>
            <div class="content">
                <div class="description huge">${text}</div>
            </div>
    </div>
    `;
    

    function addSubList(subList) {
        nodeUI.querySelector('.content').appendChild(subList);
    }

    return {
        nodeUI,
        addSubList
    }
}

const _listInterface = (...classes) => {
    const list = document.createElement('ul');
    for (let c of classes) {
        list.classList.add(c)
    }

    return list
}

function traverseChildren(node, curList) {
    const { children, name } = node;
    const {nodeUI, addSubList} = _nodeInterface(name, children);

    if (children) {
        const childrenUI = _listInterface();
        children.forEach(item => traverseChildren(item, childrenUI));
        addSubList(childrenUI)
    }

    curList.appendChild(nodeUI);
}

export function _renderTree(nodes) {
    const uiTree = _listInterface('ui', 'big', 'list')
    nodes.forEach(node => traverseChildren(node, uiTree))
    return uiTree
}