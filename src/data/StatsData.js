import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

export const StatsData = [
  
    {
      icon: (<GiEarthAmerica style={{color: "#047bf1"}}
        
        />),
      title: "Preko 100 destinacija",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum." 
      },
      {
          icon: (<MdAirplanemodeActive style={{color: "#f3a82e"}}/>),
          title: "Preko 1000 putovanja",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum." 
        },
        {
          icon: (<MdTimer style={{color: "#f34f2e"}}/>),
          title: "Najbrža podrška",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum." 
        },
        {
          icon: (<FaMoneyCheck style={{color: "#3af576"}}/>),
          title: "Najbolje ponude",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum." 
        }
      
    ]