import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle'
import MUIDataTable from "mui-datatables";
import { Grid,  IconButton } from "@material-ui/core";
import Table from "../pages/dashboard/components/Table/Table";
import mock from "../pages/dashboard/mock";
import { Delete } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';
const bookData =[
    {
        name: "کتاب اول",
        price:" 200000",
        publisher : "ناشر سبز",
        author : "محمدی",
    },
    {
        name: "کتاب دوم ",
        price:"50000",
        publisher : "جنگل",
        author : "حسینی",
    },
    {
        name: "کتاب سوم",
        price:"200000",
        publisher : "چوپان",
        author : "عزیزی",
    },
    {
        name: "کتاب اول",
        price:" 200000",
        publisher : "ناشر سبز",
        author : "محمدی",
    },
    {
        name: "کتاب دوم ",
        price:"50000",
        publisher : "جنگل",
        author : "حسینی",
    },
    {
        name: "کتاب سوم",
        price:"200000",
        publisher : "چوپان",
        author : "عزیزی",
    },
    {
        name: "کتاب اول",
        price:" 200000",
        publisher : "ناشر سبز",
        author : "محمدی",
    },
    {
        name: "کتاب دوم ",
        price:"50000",
        publisher : "جنگل",
        author : "حسینی",
    },
    {
        name: "کتاب سوم",
        price:"200000",
        publisher : "چوپان",
        author : "عزیزی",
    },
]
const Booklist = () => {
   const transform =(data)=>{
 return  data.map(item=>{
           return[
               item.name,
               item.price,
               item.publisher,
               item.author,
               <IconButton >
                 <Delete />
               </IconButton>,
                    <IconButton >
                    <Edit />
                  </IconButton>
           ]
      
       })
   }
    return (
        <div>
             <PageTitle title="لیست کتاب های موجود" />
             <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="اطلاعات کتاب ها"
            data={transform (bookData)}
            columns={["ویرایش","نام کتاب", "قیمت", "ناشر", "نویسنده " ,"حذف"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
            <Table data={mock.table} />
        </Grid>
      </Grid>
        </div>
    );
};

export default Booklist;