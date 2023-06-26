function saveHistory(data: string) {
    const history = localStorage.getItem("history");
    if (!history) {
        const savedData = [data];
        localStorage.setItem("history", JSON.stringify(savedData));
    } else {
        const parsedData: string[] = JSON.parse(history);
        const newData = [data, ...parsedData];
        localStorage.setItem("history", JSON.stringify(newData));
    }
}

export default saveHistory