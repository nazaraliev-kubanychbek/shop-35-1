import { categoryStore } from "../../store/store";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const HomePage = () => {
    const categories = categoryStore(s => s.category);
    return (
        <div>
           {
            categories.map(item =>{
                return <CategoryComponent key={item} category={item} limit={4} />
            })
           }
            
        </div>
    );
}

export default HomePage;
