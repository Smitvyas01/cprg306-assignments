import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="h-screen-300vh bg-black">
            <h1 className="text-5xl text-justify mb-10 text-orange-500">Shopping List</h1>
            <ItemList  />
        </main>
    );
}