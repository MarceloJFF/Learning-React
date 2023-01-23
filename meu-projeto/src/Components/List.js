import Item from './Item'

function List(){
    return <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca= "Renault"></Item>
            <Item marca = "Fiat"></Item>
        </ul>
    </>
}

export default List