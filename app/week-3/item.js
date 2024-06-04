export default function Item({name, quantity, category}) {
    return (
        <li className=" bg-purple-300">
        <div className="flex flex-col">
            <span className="font-bold text-xl">{name}</span>
            <span className="text-purple-800 text-medium">Buy {quantity}</span>
            <span className="text-gray-600 text-medium ">in {category}</span>
        </div>
    </li>
    );
}