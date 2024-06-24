import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="h-screen-300vh bg-black">
            <h1 className="text-5xl text-center mb-10 font-serif text-orange-400">SHOPPING LIST</h1>
            <ItemList  />
        </main>
    );
}