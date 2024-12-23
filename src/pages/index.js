import Head from "next/head";
import Table from "@/components/table";
import { useEffect, useState } from "react";

const parseData = (data) => {
  return data.map((item) => ({
    sNo: item["s.no"],
    percentageFunded: item["percentage.funded"],
    amountPledged: item["amt.pledged"]
  }));
};
const columns = [
  {
    title: "S. No",
    field: "sNo"
  },
  {
    title: "Percentage Funded",
    field: "percentageFunded"
  },
  {
    title: "Amount Pledged",
    field: "amountPledged"
  }
];

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
      .then((response) => response.json())
      .then((data) => {
        setData(parseData(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);
 

  if(isLoading) return <p>Loading ...</p>
  
  return (
   
    <>
      <Head>
        <title>Sass Labs Assignemnt</title>
      </Head>
      
        <Table data={data} columns={columns} pageSize={5} totalItems={data.length}/>
    </>
  );
}
