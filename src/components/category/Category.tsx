import React from 'react';

type CategoryProps = {
    categoryId: number;
    setCategoryId: (idx: number) => void;
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


const Category: React.FC <CategoryProps> = React.memo(({categoryId, setCategoryId}) => {





    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, idx) => (
                        <li key={idx} onClick={() => setCategoryId(idx)} className={`${categoryId === idx ? 'active' : ''}`}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
})

export default Category;