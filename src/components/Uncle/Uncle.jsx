import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'raja'}></Cousin>
                <Cousin name={'shila'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;