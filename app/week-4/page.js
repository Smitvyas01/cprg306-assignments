import NewItem from "./new-item";


export default function Page() {
    const mainStyles=" container-lg bg-purple-800 h-screen text-left text-black"
    return(
        <main className={mainStyles}>
            <NewItem />
        </main>
    );
}