import { useEffect, useState } from "react";

const Accordion = ({ items, keepOthersOpen }) => {
    const [accordionItems, setAccordionItems] = useState([]);

    useEffect(() => {
        if (items) {
            setAccordionItems(
                items.map(item => ({
                    ...item,
                    toggled: false
                }))
            );
        }
    }, [items]);

    function handleAccordionToggle(clickedItem) {
        setAccordionItems(prevItems =>
            prevItems.map(item => {
                let toggled = item.toggled;

                if (clickedItem.id === item.id) {
                    toggled = !item.toggled;
                } else if (!keepOthersOpen) {
                    toggled = false;
                }

                return {
                    ...item,
                    toggled
                };
            })
        );
    }


    return (
        <div className="accordion-parent ">
            {accordionItems.map((listItem) => (
                <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={listItem.id}>
                    <button className="toggle" onClick={() => handleAccordionToggle(listItem)}>
                        <p>{listItem.label}</p>
                        <div className="direction-indicator">{listItem.toggled ? '-' : '+'}</div>
                    </button>
                    <div className="content-parent">
                        <div className="content">{listItem.renderContent()}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
