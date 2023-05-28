import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './CustomerCard.css'
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard({ empid = 6, title = "Jose Leandro Torres", position = "CEO", description = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" }) {

    const imgsrc = [
        require("./PineTools.com_files/row-1-column-1.jpg"),
        require("./PineTools.com_files/row-1-column-2.jpg"),
        require("./PineTools.com_files/row-1-column-3.jpg"),
        require("./PineTools.com_files/row-1-column-4.jpg"),
        require("./PineTools.com_files/row-2-column-1.jpg"),
        require("./PineTools.com_files/row-2-column-2.jpg"),
        require("./PineTools.com_files/row-2-column-3.jpg"),

    ]

    const titles = [
        "Jose Torres",
        "Reinier Guerra",
        "Saray Pacheco",
        "Tahini Leon",
        "Anjali Verma",
        "Kim Kardashiyan"
    ]

    const positions = [
        "CEO",
        "Manager",
        "CFO",
        "HR Head",
        "Graphic Designer",
        "Sales Head",
        "Mortage Consultant"
    ]

    const descriptions = [
        "Visionary leader with a passion for innovation and a commitment to creating a positive impact on the world",
        "Software Engineer with 10+ years of experience in developing and maintaining high-traffic websites",
        "Marketing Manager with a passion for creating engaging and effective marketing campaigns.",
        "Customer Service Representative with a knack for resolving customer issues quickly and efficiently.",
        "Graphic Designer with a keen eye for detail and a passion for creating beautiful and user-friendly designs.",
        "Sales Representative with a proven track record of closing deals and generating revenue.",
        "Accountant with a deep understanding of the customer journey and a commitment to providing excellent customer service."
    ]

    return (
        <div className='customerCard'>
            <img className='avatar' src={imgsrc[empid]} alt="" />

            <div className='card'>
                <div className='height'></div>

                <center>
                    <h1 className='font1'>
                        {titles[empid]}
                    </h1>
                    <h3 className='font2'>
                        {positions[empid]}
                    </h3>
                    <p className='font3'>
                        {descriptions[empid]}
                    </p>
                </center>

                <table>
                    <tr>
                        <td>
                            <img className='smallicon' src={require("./179-1791856_official-facebook-circle-icon-hd-png-download.png")} alt="" />
                        </td>
                        <td>
                            <img className='smallicon' src={require("./d12e6800-b47a-11e9-85a3-5fe53e198d49.png")} alt="" />
                        </td>
                        <td>
                            <img className='smallicon' src={require("./youtube-logo-icon-vector-27990507.jpg")} alt="" />
                        </td>
                        <td>
                            <img className='smallicon' src={require("./702300.png")} alt="" />
                        </td>
                        <td>
                            <img className='smallicon' src={require("./telegram-logo-icon-vector-27990432.jpg")} alt="" />
                        </td>
                    </tr>
                </table>
            </div >
        </div>

    );
}