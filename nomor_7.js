const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "Mufiz Coey" };
        resolve(data);
      }, 2000);
    });
  };
  
  const fetchDataAsync = async () => {
    try {
      const data = await fetchData();
      console.log("Mengambil data:", data);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchDataAsync();
  