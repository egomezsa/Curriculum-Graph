var json = [
  {
    "name": "Senior Standing",
    "title": "Senior Standing",
    "prereqs": [["Junior Standing"]],
    "coreqs": [[]]
  },
  {
    "name": "Junior Standing",
    "title": "Junior Standing",
    "prereqs": [[]],
    "coreqs": [[]]
  },
  {
    "name": "MATH 221",
    "title": "Calculus I",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/MATH+221+-+Calculus+I",
    "type": "required",
    "prereqs": [[]],
    "coreqs": [[]]
  },
  {
    "name": "MATH 231",
    "title": "Calculus II",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/MATH+231+-+Calculus+II",
    "type": "required",
    "prereqs": [["MATH 221"]],
    "coreqs": [[]]
  },
  {
    "name": "MATH 241",
    "title": "Calculus III",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/MATH+241+-+Calculus+III",
    "type": "required",
    "prereqs": [["MATH 231"]],
    "coreqs": [[]]
  },
  {
    "name": "MATH 286",
    "title": "Intro to Differential Equations Plus",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/MATH+286+-+Introduction+to+Differential+Equations+Plus",
    "type": "required",
    "prereqs": [["MATH 241"]],
    "coreqs": [[]]
  },
  {
    "name": "PHYS 211",
    "title": "University Physics: Mechanics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/PHYS+211+-+University+Physics%2C+Mechanics",
    "type": "required",
    "prereqs": [[]],
    "coreqs": [["MATH 231"]]
  },
  {
    "name": "PHYS 212",
    "title": "University Physics: Electricity and Magnetism",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/PHYS+212+-+University+Physics%2C+Electricity+and+Magnetism",
    "type": "required",
    "prereqs": [["PHYS 211"]],
    "coreqs": [["MATH 241"]]
  },
  {
    "name": "PHYS 213",
    "title": "University Physics: Thermal Physics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/PHYS+213+-+University+Physics%2C+Thermal+Physics",
    "type": "required",
    "prereqs": [["PHYS 211"]],
    "coreqs": [["MATH 241"]]
  },
  {
    "name": "PHYS 214",
    "title": "University Physics: Quantum Mechanics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/PHYS+214+-+University+Physics%2C+Quantum+Physics",
    "type": "required",
    "prereqs": [["PHYS 212"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 110",
    "title": "Introduction to Electrical and Computer Engineering",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+110+-+Introduction+to+Electrical+and+Computer+Engineering",
    "type": "required",
    "prereqs": [[]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 190",
    "title": "Introduction to Computing Systems",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+190+-+Introduction+to+Computing+Systems",
    "type": "required",
    "prereqs": [["ECE 110"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 210",
    "title": "Analog Signal Processing",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+210+-+Analog+Signal+Processing",
    "type": "required",
    "prereqs": [["ECE 110", "PHYS 212"]],
    "coreqs": [["MATH 286"]]
  },
  {
    "name": "ECE 290",
    "title": "Computer Engineering I",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+290+-+Computer+Engineering+I",
    "type": "required",
    "prereqs": [["ECE 190"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 329",
    "title": "Fields and Waves I",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+329+-+Fields+and+Waves+I",
    "type": "required",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 340",
    "title": "Solid State Electronic Devices",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+340+-+Solid+State+Electronic+Devices",
    "type": "required",
    "prereqs": [["PHYS 214"]],
    "coreqs": [["ECE 329"]]
  },
  {
    "name": "RHET 105",
    "title": "Principles of Composition",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/RHET+105+-+Principles+of+Composition",
    "type": "required",
    "prereqs": [[]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 304",
    "title": "Photonic Devices",
    "type": "ECE tech elective",
    "prereqs": [["PHYS 214"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 307",
    "title": "Techniques for Engrg Decisions",
    "type": "ECE tech elective",
    "prereqs": [["ECE 210"]],
    "coreqs": [["ECE 313"]]
  },
  {
    "name": "ECE 310",
    "title": "Digital Signal Processing",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+310+-+Digital+Signal+Processing+I",
    "cetype": "ECE tech elective",
    "eetype": "3of5",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 311",
    "title": "Digital Signal Processing Lab",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+311+-+Digital+Signal+Processing+Lab",
    "type": "ECE tech elective",
    "prereqs": [[]],
    "coreqs": [["ECE 310"]]
  },
  {
    "name": "ECE 313",
    "title": "Probability with Engrg Applic",
    "crosslist": ["MATH 362"],
    "nocredit": ["MATH 461"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+313+-+Probability+with+Engineering+Applications",
    "type": "required",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "PHIL 316",
    "title": "Ethics and Engineering",
    "crosslist": ["ECE 316"],
    "type": "elective",
    "prereqs": [["RHET 105", "Junior Standing"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 330",
    "title": "Power Circuits and Electromechanics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+330+-+Power+Circuits+and+Electromechanics",
    "cetype": "ECE tech elective",
    "eetype": "3of5",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 333",
    "title": "Green Electric Energy",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+333+-+Green+Electric+Energy",
    "type": "ECE tech elective",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 342",
    "title": "Electronic Circuits",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289968",
    "cetype": "ECE tech elective",
    "eetype": "3of5",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 343",
    "title": "Electronic Circuits Lab",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289968",
    "type": "ECE tech elective / lab",
    "prereqs": [[]],
    "coreqs": [["ECE 342"]]
  },
  {
    "name": "ECE 350",
    "title": "Fields and Waves II",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+350+-+Fields+and+Waves+II",
    "cetype": "ECE tech elective",
    "eetype": "3of5",
    "prereqs": [["ECE 329"]],
    "coreqs": [[]]
  } ,
  {
    "name": "ECE 361",
    "title": "Fundamentals of Digital Communications",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289485", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 210", "ECE 313"]],
    "coreqs": [ [] ]
  } ,
  {
    "name": "ECE 380",
    "title": "Biomedical Imaging",
    "crosslist": ["BIOE 380"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+380+-+Biomedical+Imaging", 
    "type": "ECE tech elective",
    "prereqs": [["MATH 286"], ["MATH 285"]],
    "coreqs": [ [] ]
  } , 
  {
    "name": "ECE 385",
    "title": "Digital Systems Laboratory",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+385+-+Digital+Systems+Laboratory", 
    "type": "required",
    "prereqs": [ ["ECE 290", "ECE 110"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 391",
    "title": "Computer Systems Engineering",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+391+-+Computer+Systems+Engineering", 
    "cetype": "required",
    "eetype": "3of5 / lab",
    "prereqs": [ ["ECE 290"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 395",
    "title": "Advanced Digital Systems Laboratory",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+395+-+Advanced+Digital+Systems+Laboratory", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 385"]],
    "coreqs": [ [] ]
  },

  {
    "name": "ECE 402",
    "title": "Electronic Music Synthesis",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+402+-+Electronic+Music+Synthesis", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["MUS 103", "ECE 290", "ECE 310"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 403",
    "title": "Audio Engineering",
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 290", "ECE 310", "ECE 473"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 408",
    "title": "Applied Parallel Programming",
    "type": "ECE tech elective",
    "crosslist": ["CS 483"],
    "prereqs": [ ["ECE 190"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 411",
    "title": "Computer Organization and Design",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+411+-+Computer+Organization+and+Design", 
    "cetype": "required",
    "eetype": "ECE tech elective / lab",
    "prereqs": [ ["ECE 391"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 412",
    "title": "Microcomputer Laboratory",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289509", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 385", "ECE 391"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 414",
    "title": "Biomedical Instrumentation",
    "crosslist": ["BIOE 414"],
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=213221447", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 210"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 415",
    "title": "Biomedical Instrumentation Lab",
    "type": "ECE tech elective / lab",
    "crosslist": ["BIOE 415"],
    "prereqs": [ []],
    "coreqs": [ ["ECE 414"] ]
  },
  {
    "name": "ECE 416",
    "title": "Biosensors",
    "type": "ECE tech elective",
    "crosslist": ["BIOE 416"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+416+-+Biosensors", 
    "prereqs": [ ["ECE 329"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 417",
    "title": "Multimedia Signal Processing",
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 310", "ECE 313"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 418",
    "title": "Image & Video Processing",
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 310", "MATH 415", "ECE 313"],
    ["ECE 310", "MATH 415", "STAT 400"], 
    ["ECE 310", "MATH 415", "IE 300"], 
    ["ECE 310", "MATH 415", "MATH 461"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 460",
    "title": "Security Laboratory",
    "type": "ECE tech elective",
    "crosslist": ["ECE 419"],
    "prereqs": [["CS 461"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 420",
    "title": "Embedded DSP Laboratory",
    "type": "ECE tech elective / lab",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+420+-+Embedded+DSP+Laboratory", 
    "prereqs": [ ["ECE 310"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 461",
    "title": "Computer Security I",
    "crosslist": ["ECE 422"],
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=213747887", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 391"], ["CS 241"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 463",
    "title": "Computer Security II",
    "crosslist": ["ECE 424"],
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=213747887", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 422"], ["CS 461"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 425",
    "title": "Intro to VLSI System Design",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+425+-+Intro+to+VLSI+System+Design", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 385", "ECE 411"], ["CS 232"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 425",
    "title": "Distributed Systems",
    "crosslist": ["ECE 428"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/CS+425+%28ECE+428%29+-+Distributed+Systems", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 391"], ["CS 232"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 431",
    "title": "Electric Machinery",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+431+-+Electric+Machinery", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 330"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 432",
    "title": "Advanced Electric Machinery",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+431+-+Electric+Machinery", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 431"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 436",
    "title": "Computer Networking Laboratory",
    "type": "ECE tech elective / lab",
    "crosslist": ["ECE 435"],
    "prereqs": [ ["CS 438"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 437",
    "title": "Sensors and Instrumentation",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289962", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 329"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 438",
    "title": "Communication Networks",
    "crosslist": ["ECE 438"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/CS+438+-+Communication+Networks", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 391", "ECE 313"],
                 ["ECE 391", "MATH 461"],
                 ["ECE 391", "STAT 400"],
                 ["CS 241", "ECE 313"],
                 ["CS 241", "MATH 461"],
                 ["CS 241", "STAT 400"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 439",
    "title": "Wireless Networks",
    "type": "ECE tech elective / lab",
    "crosslist": ["CS 439"],
    "prereqs": [ ["ECE 391", "ECE 313"],
                 ["ECE 391", "MATH 461"],
                 ["ECE 391", "STAT 400"],
                 ["CS 241", "ECE 313"],
                 ["CS 241", "MATH 461"],
                 ["CS 241", "STAT 400"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 441",
    "title": "Physcs & Modeling Semicond Dev",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+441+-+Physics+and+Modeling+of+Semiconductor+Devices", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 340"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 444",
    "title": "Theory and Fabrication of Integrated Circuits",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+444+-+Theory+and+Fabrication+of+Integrated+Circuits", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 340"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 445",
    "title": "Senior Design",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+445+-+Senior+Design", 
    "eetype": "required",
    "cetype": "ECE tech elective",
    "prereqs": [ ["Senior Standing"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 447",
    "title": "Active Microwave Ckt Design",
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 350", "ECE 453"]],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 440",
    "title": "Artificial Intelligence",
    "type": "ECE tech elective",
    "crosslist": ["ECE 448"],
    "prereqs": [ ["ECE 391"], ["CS 225"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 451",
    "title": "Adv Microwave Measurements",
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 350"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 452",
    "title": "Electromagnetic Fields and Electro-Optics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+452+-+Electromagnetic+Fields+and+Electro-Optics", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 350"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 453",
    "title": "Wireless Communication Systems",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+453+-+Wireless+Communications+Systems", 
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 329"]],
    "coreqs": [ ["ECE 342"] ]
  },
  {
    "name": "ECE 454",
    "title": "Antennas",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+454+-+Antennas", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 350"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 455",
    "title": "Optical Electronics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+455+-+Optical+Electronics", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 350"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 456",
    "title": "Global Nav Satellite Systems",
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 329", "ECE 310"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 457",
    "title": "Microwave Devices & Circuits",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=200478916", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 350"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 458",
    "title": "Applic of Radio Wave Propag",
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 350"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 459",
    "title": "Communications Systems",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+459+-+Communication+Systems", 
    "type": "ECE tech elective",
    "prereqs": [ ["ECE 313"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 460",
    "title": "Optical Imaging",
    "type": "ECE tech elective / lab",
    "prereqs": [ ["ECE 329"]],
    "coreqs": [ ["ECE 313"] ]
  },
  {
    "name": "CS 173",
    "title": "Discrete Structures",
    "cetype": "required",
    "eetype": "CS tech elective",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/CS+173+-+Discrete+Structures",
    "prereqs": [
        ["CS 101", "MATH 220"],
        ["CS 125", "MATH 220"],
        ["ECE 190", "MATH 220"],
        ["INFO 103", "MATH 220"],
        ["CS 101", "MATH 221"],
        ["CS 125", "MATH 221"],
        ["ECE 190", "MATH 221"],
        ["INFO 103", "MATH 221"],
        ["CS 101", "MATH 234"],
        ["CS 125", "MATH 234"],
        ["ECE 190", "MATH 234"],
        ["INFO 103", "MATH 234"]
    ],
    "coreqs": [[]]
  },
  {
    "name": "CS 125",
    "title": "Intro to Computer Science",
    "type": "elective",
    "prereqs": [ []],
    "coreqs": [ [] ]
  },
  {
    "name": "CS 225",
    "title": "Data Structures",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/CS+225+-+Data+Structures",
    "cetype": "required",
    "eetype": "3of5",
    "prereqs": [ ["ECE 190", "CS 173"], 
                 ["ECE 190", "MATH 213"],
                 ["CS 125", "MATH 213"],
                 ["CS 125", "CS 173"]],
    "coreqs": [ [] ]
  },
  {
    "name": "MATH 213",
    "title": "Basic Discrete Mathematics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/MATH+213+-+Basic+Discrete+Mathematics",
    "cetype": "required",
    "eetype": "tech elective",
    "prereqs": [ ["MATH 220"], ["MATH 221"]],
    "coreqs": [ [] ]
  },
  {
    "name": "MATH 415",
    "title": "Applied Linear Algebra",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/Math+415+-+Applied+Linear+Algebra",
    "type": "tech elective",
    "prereqs": [ ["MATH 241"]],
    "coreqs": [ [] ]
  },
  {
    "name": "ECE 462",
    "title": "Logic Design",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+462+-+Logic+Design",
    "type": "ECE tech elective",
    "prereqs": [["ECE 290"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 463",
    "title": "Digital Communications Lab",
    "type": "ECE tech elective / lab",
    "prereqs": [["ECE 361"], ["ECE 459"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 464",
    "title": "Power Electronics",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+464+-+Power+Electronics",
    "type": "ECE tech elective",
    "prereqs": [["ECE 342"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 465",
    "title": "Optical Communications Systems",
    "type": "ECE tech elective",
    "prereqs": [["ECE 313", "ECE 350"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 466",
    "title": "Optical Communications Lab",
    "type": "ECE tech elective / lab",
    "prereqs": [[]],
    "coreqs": [["ECE 465"]]
  },
  {
    "name": "ECE 467",
    "title": "Biophotonics",
    "type": "ECE tech elective",
    "crosslist": ["BIOE 467"],
    "prereqs": [["ECE 455"], ["ECE 460"], ["PHYS 402"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 468",
    "title": "Optical Remote Sensing",
    "type": "ECE tech elective / lab",
    "crosslist": ["AE 468"],
    "prereqs": [["ECE 329", "ECE 313"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 469",
    "title": "Power Electronics Lab",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+469+-+Power+Electronics+Laboratory",
    "type": "ECE tech elective / lab",
    "prereqs": [["ECE 343"]],
    "coreqs": [["ECE 464"]]
  },
  {
    "name": "ECE 470",
    "title": "Introduction to Robotics",
    "crosslist": ["AE 482", "ME 445"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+470+-+Introduction+to+Robotics",
    "type": "ECE tech elective / lab",
    "prereqs": [["MATH 225"], ["MATH 286"], ["MATH 415"], ["MATH 418"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 472",
    "title": "Biomedical Ultrasound Imaging",
    "type": "ECE tech elective",
    "prereqs": [["ECE 329"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 473",
    "title": "Fund of Engrg Acoustics",
    "type": "ECE tech elective",
    "crosslist": ["TAM 413"],
    "prereqs": [["MATH 285"], ["MATH 286"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 476",
    "title": "Power System Analysis",
    "type": "ECE tech elective",
    "prereqs": [["ECE 330"]],
    "coreqs": [[]]
  },
  {
    "name": "CS 477",
    "title": "Formal Software Development Methods",
    "type": "ECE tech elective",
    "crosslist": ["ECE 478"],
    "prereqs": [["CS 225", "CS 373"], ["CS 225", "MATH 414"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 480",
    "title": "Magnetic Resonance Imaging",
    "type": "ECE tech elective",
    "crosslist": ["BIOE 480"],
    "prereqs": [["ECE 310"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 481",
    "title": "Nanotechnology",
    "type": "ECE tech elective",
    "prereqs": [["CHEM 442"], ["CHBE 457"], ["ECE 485"], ["MSE 401"], ["PHYS 460"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 482",
    "title": "Digital IC Design",
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/ECE+482+-+Digital+IC+Design",
    "type": "ECE tech elective",
    "prereqs": [["ECE 290", "ECE 342"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 483",
    "title": "Analog IC Design",
    "type": "ECE tech elective",
    "prereqs": [["ECE 342"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 484",
    "title": "Prin Adv Microelec Processing",
    "type": "ECE tech elective",
    "prereqs": [["ECE 444"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 485",
    "title": "MEMS Devices & Systems",
    "type": "ECE tech elective",
    "crosslist": ["ME 485"],
    "prereqs": [[]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 486",
    "title": "Control Systems",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289976",
    "type": "ECE tech elective / lab",
    "prereqs": [["ECE 210"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 487",
    "title": "Intro to Quantum Electr for EEs",
    "type": "ECE tech elective",
    "prereqs": [["PHYS 485"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 488",
    "title": "Compound Semicond & Devices",
    "type": "ECE tech elective",
    "prereqs": [["ECE 340", "ECE 350"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 490",
    "title": "Introduction to Optimization",
    "type": "ECE tech elective",
    "crosslist": ["CSE 441"],
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=194289978",
    "prereqs": [["ECE 190", "MATH 415"]],
    "coreqs": [[]]
  },
  {
    "name": "CS 450",
    "title": "Numerical Analysis",
    "crosslist": ["ECE 491", "MATH 450", "CSE 401"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/CS+450+%28ECE+491%2C+MATH+450%2C+CSE+401%29+-+Numerical+Analysis",
    "type": "ECE tech elective",
    "prereqs": [["CS 101", "CS 357", "MATH 285"], ["CS 125", "CS 357", "MATH 285"], ["CS 101", "MATH 415", "MATH 285"], ["CS 125", "MATH 415", "MATH 285"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 492",
    "title": "Parallel Progrmg: Sci & Engrg",
    "type": "ECE tech elective",
    "crosslist": ["CS 420", "CSE 402"], 
    "prereqs": [["CS 225"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 493",
    "title": "Advanced Engineering Math",
    "type": "ECE tech elective",
    "crosslist": ["MATH 487"],
    "prereqs": [["MATH 284"], ["MATH 285"], ["MATH 286"], ["MATH 441"]],
    "coreqs": [[]]
  },
  {
    "name": "ECE 495",
    "title": "Photonic Device Laboratory",
    "type": "ECE tech elective / lab",
    "prereqs": [["ECE 487"]],
    "coreqs": [[]]
  },
  {
    "name": "CS 373",
    "title": "Theory of Computation",
    "type": "CS tech elective",
    "prereqs": [["CS 225", "CS 173"], ["CS 225", "MATH 213"]],
    "coreqs": [[]]
  },
  {
    "name": "CS 473",
    "title": "Fundamental Algorithms",
    "type": "CS tech elective",
    "crosslist": ["CSE 414", "MATH 473"],
    "prereqs": [["CS 373"]],
    "coreqs": [[]]
  },
  {
    "name": "CS 241",
    "title": "Systems Programming",
    "type": "elective",
    "prereqs": [["CS 225"]],
    "coreqs": [["CS 232"]]
  },
  {
    "name": "PHYS 485",
    "title": "Atomic Phys and Quantum Theory",
    "type": "tech elective",
    "prereqs": [["MATH 286", "PHYS 214"], ["MATH 285", "PHYS 214"]],
    "coreqs": [[]]
  },
  {
    "name": "CHEM 102",
    "title": "General Chemistry I",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=198674689",
    "type": "required",
    "nocredit": ["CHEM 202"],
    "prereqs": [[]],
    "coreqs": [[]]
  },
  {
    "name": "CHEM 103",
    "title": "General Chemistry Lab I",
    "link": "https://wiki.engr.illinois.edu/pages/viewpage.action?pageId=198674689",
    "type": "required",
    "prereqs": [[]],
    "coreqs": [["CHEM 102"]]
  },
  {
    "name": "MATH 461",
    "title": "Probability Theory",
    "crosslist": ["STAT 451"],
    "nocredit": ["STAT 408", "ECE 313"],
    "link": "https://wiki.engr.illinois.edu/display/HKNDEN/Math+461+-+Probability+Theory",
    "type": "elective",
    "prereqs": [["MATH 241"]],
    "coreqs": [[]]
  },
  {
    "name": "STAT 400",
    "title": "Statistics and Probability I",
    "crosslist": ["MATH 463"],
    "nocredit": ["STAT 408"],
    "type": "elective",
    "prereqs": [["MATH 241"]],
    "coreqs": [[]]
  },
  {
    "name": "STAT 410",
    "title": "Statistics and Probability II",
    "crosslist": ["MATH 464"],
    "nocredit": ["STAT 409"],
    "type": "required",
    "prereqs": [["STAT 400"], ["STAT 100", "MATH 461"]],
    "coreqs": [[]]
  }
 ];

 if (typeof exports !== "undefined")
   exports.json = json;
