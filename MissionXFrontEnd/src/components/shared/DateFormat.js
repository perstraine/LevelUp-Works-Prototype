
const dateFormat = (date) => { 
    const dateDisplay = new Date(date);
    return (dateDisplay.toLocaleDateString('en-us', { day:"numeric", year:"numeric", month:"short"}));
}

export default dateFormat;
