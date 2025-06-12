import {cleanBandeShow} from './main.js';
import { createElement } from '../componement.js';
import { clean } from './cleanPage.js'
function StatusView()
{
    clean()
    const status =createElement("h1",{class:"text-2xl text-[#2EB06D] ffont-bold"},"WhatshApp")
    cleanBandeShow.appendChild(status)
}
export {StatusView}