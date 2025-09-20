const base_url =`https://jsonplaceholder.typicode.com/posts`;

const apiCalling = () =>{
    let data = fetch(base_url);
    console.log('🚀 ~ data:', data);

    //handling promise with sync way
    fetch(base_url)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("data has been fetch"));
}
apiCalling();

const apiCall = async () => {
        //handling promise with async way
    try{
        let data = await fetch(base_url);
        let res = await data.json();
        console.log('🚀 ~ res:', res);
    }
    catch (err){
        console.log('🚀 ~ err:', err);
    }
}
apiCall();