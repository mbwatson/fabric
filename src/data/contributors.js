import React from 'react'
import { Link } from 'gatsby'

export const contributors = [
  {
    id:'core-team',
    name: 'FABRIC Core Team',
    members: [
      {
        name: 'Ilya Baldin',
        url: 'https://renci.org/',
        organization: 'RENCI',
      },
      {
        name: 'Anita Nikolich',
        url: 'https://www.iit.edu/',
        organization: 'Illinois Institute of Technology',
      },
      {
        name: 'Paul Ruth',
        url: 'https://renci.org/',
        organization: 'RENCI',
      },
      {
        name: 'Jim Griffioen',
        url: 'http://www.uky.edu/',
        organization: 'University of Kentucky',
      },
      {
        name: 'KC Wang',
        url: 'https://www.clemson.edu/',
        organization: 'Clemson University',
      },
      {
        name: 'Inder Monga',
        url: '#',
        organization: 'Lawrence Berkeley National Laboratory',
      },
      {
        name: 'Tom Lehman',
        url: 'https://www.lbl.gov/',
        organization: 'Virnao',
         }
    ]
  },
  {
    id: 'science-design-drivers',
    name: 'Science/Design Drivers',
    members: [
      {
        name: 'Yixin Sun',
        url: 'https://www.virginia.edu/',
        organization: 'University of Virginia',
      },
      {
        name: 'Alex Afanasiev',
        url: 'https://www.fiu.edu/',
        organization: 'Florida International University',
      },
      {
        name: 'Russ Clark',
        url: 'https://www.gatech.edu/',
        organization: 'Georgia Institute of Technology',
      },
      {
        name: 'Phil Porras',
        url: 'https://www.sri.com/',
        organization: 'Stanford SRI',
      },
      {
        name: <Link to="/news/fabric-honors-malathi-veeraraghavan">In Memory: Malathi Veeraraghavan</Link>,
        url: '',
        organization: '',
      }
    ]
  },
  {
    id: 'facility-partners',
    name: 'Facility Partners',
    members: [
      {
        name: 'Rob Ricci',
        organization: 'University of Utah',
        facility: 'CloudLab',
        url: 'https://cloudlab.us/',
      },
      {
        name: 'Kobus van der Merwe',
        organization: 'University of Utah',
        facility: 'Powder',
        url: 'https://powderwireless.net/',
      },
      {
        name: 'Kate Keahey',
        organization: 'University of Chicago/ANL',
        facility: 'Chameleon',
        url: 'https://www.chameleoncloud.org/',
      },
      {
        name: 'Glenn Ricart',
        organization: 'US Ignite',
        facility: 'US Ignite',
        url: 'https://www.us-ignite.org/',
      },
      {
        name: 'Julio Ibarra',
        organization: 'Florida International University',
        facility: 'AMPATH',
        url: 'https://ampath.net/',
      },
      {
        name: 'Thomas DeFanti',
        organization: 'University of California San Diego',
        facility: 'PRP',
        url: 'http://pacificresearchplatform.org/',
      },
      {
        name: 'Ethan Katz-Bassett',
        organization: 'Columbia University',
        facility: 'PEERING',
        url: 'https://peering.usc.edu/',
      },
      {
        name: 'Ivan Seskar',
        organization: 'Rutgers University',
        facility: 'COSMOS',
        url: 'https://www.cosmos-lab.org/',
      },
      {
        name: 'Barr von Oehsen',
        organization: 'Rutgers University',
        facility: 'ERN',
        url: 'http://ern.hpc.rutgers.edu/',
       },
      {
        name: 'Dan Stanzione',
        organization: 'Texas Advanced Computing Center',
        facility: 'Texas Advanced Computing Center',
        url: 'https://www.tacc.utexas.edu/',
      },
      {
        name: 'John Towns',
        organization: 'National Center for Supercomputing Applications',
        facility: 'National Center for Supercomputing Applications',
        url: 'http://www.ncsa.illinois.edu/',
      },
      {
        name: 'David Wheeler',
        organization: 'National Center for Supercomputing Applications',
        facility: 'National Center for Supercomputing Applications',
        url: 'http://www.ncsa.illinois.edu/',
      },
      {
        name: 'Matt Zekauskas',
        organization: 'Internet2',
        facility: 'Internet2',
        url: 'https://www.internet2.edu/',
      }
    ]
  }
]
