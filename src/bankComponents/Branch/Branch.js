import React from 'react'
import './branch.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export default function Branch() {

    const images = [
        "https://www.revv.co.in/blogs/wp-content/uploads/2017/11/4vqymeb.jpg",
        "https://cdn.britannica.com/31/76031-050-162E5900/CN-Tower-rest-skyline-Toronto-world-structure.jpg",
        "https://www.travelandleisure.com/thmb/Ob_Nwm7hl66sqsHuQghB9ERCEjs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dubai-DUBAITG0721-04b6fdc668e649adb5368b3db401651c.jpg",
        "https://cdn.vox-cdn.com/thumbor/40skNZvybeWWpt_8ovsSm8jdwLs=/0x504:1800x1446/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21852447/west_bluff_picnic_area.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/1b/13/da/caption.jpg?w=1200&h=700&s=1&cx=2815&cy=1896&chk=v1_b99b6126b947f1a8aa0b"

    ]

    return (
        <div className='branchBody'>
            <Grid container spacing={18}>
                <Grid item xs={1}>
                </Grid>
                <Grid className='sizefix' item xs={5}>

                    <img className='branchImg1' src={images[0]} />
                    <h1 className='imgDesc1'>Mumbai</h1>
                </Grid>
                <Grid className='sizefix' item xs={5}>

                    <img className='branchImg2' src={images[1]} />
                    <h1 className='imgDesc2'>Toronto</h1>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid className='sizefix' item xs={4}>

                    <img className='branchImg3' src={images[2]} />
                    <h1 className='imgDesc3'>Dubai</h1>
                </Grid>
                <Grid className='sizefix' item xs={4}>

                    <img className='branchImg4' src={images[3]} />
                    <h1 className='imgDesc4'>San Francisco</h1>
                </Grid>
                <Grid className='sizefix' item xs={4}>

                    <img className='branchImg5' src={images[4]} />
                    <h1 className='imgDesc5'>London</h1>
                </Grid>
            </Grid>





        </div>
    )
}
