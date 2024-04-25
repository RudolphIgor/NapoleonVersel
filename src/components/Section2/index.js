import React from 'react';
import clsx from "clsx";
import style from "./index.module.css"
import {catalogItems} from "../../data/catalogItems";
import CatalogCard from "../CatalogCard";


const Index = () => {
    return (
        <section className={clsx('container', 'section')} id="section2">
            <h2 className={clsx('sectionTitle')}>
                каталог
            </h2>
            <div className={clsx(style.categoryContainer)}>
                <div className={clsx(style.categoryRowTop)}>
                    {
                        catalogItems.map(catalogItem => {
                            if (catalogItem.id > 0 && catalogItem.id < 3){
                                console.log(catalogItem.id)
                                return <CatalogCard key={catalogItem.id} catalogItem={catalogItem}/>
                            }
                        })
                    }
                </div>
                <div className={clsx(style.categoryRowMiddle)}>
                    {
                        catalogItems.map(catalogItem => {
                            if (catalogItem.id > 2 && catalogItem.id < 6) {
                                console.log(catalogItem.id)
                                return <CatalogCard key={catalogItem.id} catalogItem={catalogItem}/>
                            }
                        })
                    }
                </div>
                <div className={clsx(style.categoryRowBottom)}>
                    {
                        catalogItems.map(catalogItem => {
                            if (catalogItem.id > 5 && catalogItem.id < 8) {
                                console.log(catalogItem.id)
                                return <CatalogCard key={catalogItem.id} catalogItem={catalogItem}/>
                            }
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Index;