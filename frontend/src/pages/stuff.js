import React, { Component, useState  } from "react";
import Blocks from "./blocks";

function Stuff() {
    const [users, setUsers] = useState([
        {name:"block1",message:"m1"},
        {name:"block2",message:"m2"},
        {name:"block3",message:"m3"},
        {name:"block4",message:"m4"},
        {name:"block5",message:"m5"},
        {name:"block6",message:"m6"},
        {name:"block7",message:"m7"},
        {name:"block8",message:"m8"},
        {name:"block9",message:"m9"},
        {name:"block10",message:"m10"},
        {name:"block11",message:"m11"},
        {name:"block12",message:"m12"},
        {name:"block13",message:"m13"},
        {name:"block14",message:"m14"},
        {name:"block15",message:"m15"},
        {name:"block16",message:"m16"},
        {name:"block17",message:"m17"},
        {name:"block18",message:"m18"},
        {name:"block19",message:"m19"},
        {name:"block20",message:"m20"},
        {name:"block21",message:"m21"},
        {name:"block22",message:"m22"},
        {name:"block23",message:"m23"},
        {name:"block24",message:"m24"},
        {name:"block25",message:"m25"},
        {name:"block26",message:"m26"},
        {name:"block27",message:"m27"},
        {name:"block28",message:"m28"},
        {name:"block29",message:"m29"},
        {name:"block30",message:"m30"},
        {name:"block31",message:"m31"},
        {name:"block32",message:"m32"},
        {name:"block33",message:"m33"},
        {name:"block34",message:"m34"},
        {name:"block35",message:"m35"},
        {name:"block36",message:"m36"},
        {name:"block37",message:"m37"},
        {name:"block38",message:"m38"},
        {name:"block39",message:"m39"},
        {name:"block40",message:"m40"}
    ]);
    return (
      <div>
        <h2>STUFF</h2>
        {users.map(user => (
            <Blocks name={user.name} message={user.message}/>
        ))}
      </div>
    );
}
 
export default Stuff;