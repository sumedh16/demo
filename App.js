// import { useState } from "react";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState('');

//   const handleInsert = (value) => {
//     const ivalue=parseInt(value,10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={() => handleInsert(value)}>Insert</button>
//       {nodes.map((node, index) => (
//         <div key={index}>
//         [{index}] Value: {node.value} | Parent: {node.parent} | Left: {node.left} | Right: {node.right}
//       </div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <BST />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect, useRef } from "react";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState('');
//   const canvasRef = useRef(null);

//   const handleInsert = (value) => {
//     const ivalue=parseInt(value,10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     nodes.forEach((node, index) => {
//       // Draw circle
//       ctx.beginPath();
//       ctx.arc((index + 1) * 50, 50, 20, 0, 2 * Math.PI);
//       ctx.stroke();

//       // Draw value
//       ctx.fillStyle = "#000";
//       ctx.textAlign = "center";
//       ctx.fillText(node.value, (index + 1) * 50, 55);

//       // Draw left child line
//       if (node.left !== null) {
//         ctx.beginPath();
//         ctx.moveTo((index + 1) * 50, 70);
//         ctx.lineTo((node.left + 1) * 50, 30);
//         ctx.stroke();
//       }

//       // Draw right child line
//       if (node.right !== null) {
//         ctx.beginPath();
//         ctx.moveTo((index + 1) * 50, 70);
//         ctx.lineTo((node.right + 1) * 50, 30);
//         ctx.stroke();
//       }
//     });
//   }, [nodes]);

//   return (
//     <div>
//       <canvas ref={canvasRef} width={800} height={100} />
//       <br />
//       <input
//         type="text"
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={() => handleInsert(value)}>Insert</button>
//       {nodes.map((node, index) => (
//         <div key={index}>
//         [{index}] Value: {node.value} | Parent: {node.parent} | Left: {node.left} | Right: {node.right}
//       </div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <BST />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect, useRef } from "react";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState('');
//   const canvasRef = useRef(null);

//   const handleInsert = (value) => {
//     const ivalue=parseInt(value,10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     nodes.forEach((node, index) => {
//       // Draw circle
//       ctx.beginPath();
//       ctx.arc(400, (index + 1) * 50, 20, 0, 2 * Math.PI);
//       ctx.stroke();

//       // Draw value
//       ctx.fillStyle = "#000";
//       ctx.textAlign = "center";
//       ctx.fillText(node.value, 400, (index + 1) * 50 + 5);

//       // Draw left child line
//       if (node.left !== null) {
//         ctx.beginPath();
//         ctx.moveTo(400, (index + 1) * 50 + 20);
//         ctx.lineTo(350, (node.left + 1) * 50);
//         ctx.stroke();
//       }

//       // Draw right child line
//       if (node.right !== null) {
//         ctx.beginPath();
//         ctx.moveTo(400, (index + 1) * 50 + 20);
//         ctx.lineTo(450, (node.right + 1) * 50);
//         ctx.stroke();
//       }
//     });
//   }, [nodes]);

//   return (
//     <div>
//       <canvas ref={canvasRef} width={800} height={600} />
//       <br />
//       <input
//         type="text"
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={() => handleInsert(value)}>Insert</button>
//       {nodes.map((node, index) => (
//         <div key={index}>
//           [{index}] Value: {node.value} | Parent: {node.parent} | Left: {node.left} | Right: {node.right}
//         </div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <BST />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect, useRef } from 'react';

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState('');

//   const handleInsert = (value) => {
//     const ivalue = parseInt(value, 10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null,
//       x: null,
//       y: null
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     const traverse = (index, depth, x, y) => {
//       const node = nodes[index];
//       node.x = x;
//       node.y = y;
//       if (node.left !== null) {
//         traverse(node.left, depth + 1, x - 2 ** (5 - depth), y + 50);
//       }
//       if (node.right !== null) {
//         traverse(node.right, depth + 1, x + 2 ** (5 - depth), y + 50);
//       }
//       ctx.beginPath();
//       ctx.arc(x, y, 15, 0, 2 * Math.PI);
//       ctx.stroke();
//       ctx.fillText(node.value, x, y);
//       if (node.parent !== null) {
//         const parent = nodes[node.parent];
//         ctx.moveTo(x, y);
//         ctx.lineTo(parent.x, parent.y);
//         ctx.stroke();
//       }
//     };

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     if (nodes.length > 0) {
//       traverse(0, 0, canvas.width / 2, 50);
//     }
//   }, [nodes]);

//   return (
//     <div>
//       <input type="text" onChange={(e) => setValue(e.target.value)} />
//       <button onClick={() => handleInsert(value)}>Insert</button>
//       <canvas ref={canvasRef} width={800} height={500}></canvas>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <BST />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from "react";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState("");

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     const nodeRadius = 20;
//     const nodeGap = 100;
//     const fontSize = 18;
//     ctx.font = `${fontSize}px Arial`;

//     const drawNode = (node, x, y, level) => {
//       console.log(nodes);
//       ctx.beginPath();
//       ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
//       ctx.fillStyle = "white";
//       ctx.fill();
//       ctx.stroke();

//       ctx.fillStyle = "black";
//       ctx.fillText(node.value, x - fontSize / 2, y + fontSize / 2);

//       if (node.left !== null) {
//         const leftChild = nodes[node.left];
//         const leftX = x - nodeGap / Math.pow(2, level);
//         const leftY = y + nodeGap;
//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(leftX, leftY - nodeRadius);
//         ctx.stroke();
//         drawNode(leftChild, leftX, leftY, level + 1);
//       }

//       if (node.right !== null) {
//         const rightChild = nodes[node.right];
//         const rightX = x + nodeGap / Math.pow(2, level);
//         const rightY = y + nodeGap;
//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(rightX, rightY - nodeRadius);
//         ctx.stroke();
//         drawNode(rightChild, rightX, rightY, level + 1);
//       }
//     };

//     nodes.forEach((node, index) => {
//       if (index === 0) {
//         drawNode(node, canvas.width / 2, nodeRadius + nodeGap / 2, 0);
//       }
//     });
//   }, [nodes]);

//   const handleInsert = (value) => {
//     const ivalue = parseInt(value, 10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null,
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <canvas ref={canvasRef} width={800} height={600}></canvas>
//       <input type="text" onChange={(e) => setValue(e.target.value)} />
//       <button onClick={() => handleInsert(value)}>Insert</button>
//     </div>
//   );
// }
// function App() {
//     return (
//       <div className="App">
//         <BST />
//       </div>
//     );
//   }

//   export default App;

// import React, { useState, useEffect, useRef } from "react";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState("");

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     const nodeRadius = 15; // decreased node radius
//      // decreased node gap
//     const fontSize = 14;
//     ctx.font = `${fontSize}px Arial`;

//     const drawNode = (node, x, y, level) => {

//       console.log(nodes);
//       ctx.beginPath();
//       ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
//       ctx.fillStyle = "white";
//       ctx.fill();
//       ctx.stroke();

//       ctx.fillStyle = "black";
//       ctx.fillText(node.value, x - fontSize / 2, y + fontSize / 2);
//       const nodeGap = 65+level * 16;
//       if (node.left !== null) {
//         const leftChild = nodes[node.left];
//         const leftX = x - nodeGap/Math.pow(2.6,level);
//         const leftY = y + nodeGap;

//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(leftX, leftY - nodeRadius);
//         ctx.stroke();
//         drawNode(leftChild, leftX, leftY, level + 1);
//       }

//       if (node.right !== null) {
//         const rightChild = nodes[node.right];
//         const rightX = x + nodeGap/Math.pow(2.3,level);
//         const rightY = y + nodeGap;

//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(rightX, rightY - nodeRadius);
//         ctx.stroke();
//         drawNode(rightChild, rightX, rightY, level + 1);
//       }
//     };

//     nodes.forEach((node, index) => {
//       if (index === 0) {
//         drawNode(node, canvas.width / 2, nodeRadius + 50, 0);
//       }
//     });
//   }, [nodes]);

//   const handleInsert = (value) => {
//     const ivalue = parseInt(value, 10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null,
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   return (
//     <div>
//        <canvas ref={canvasRef} width={900} height={600}></canvas>
//        <input type="text" onChange={(e) => setValue(e.target.value)} />
//        <button onClick={() => handleInsert(value)}>Insert</button>
//      </div>
//   );
// }

// function App() {
//       return (
//         <div className="App">
//           <BST />
//         </div>
//       );
//     }

//     export default App;

// import React, { useState, useEffect, useRef } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState("");
//   const [trees, setTrees] = useState([]);

//   const canvasRef = useRef(null);

//   const firebaseConfig = {

//   apiKey: "AIzaSyAzrjEU6Pr12gOT_hhqg8j2eHA37s9SUGE",
//   authDomain: "tree-deb80.firebaseapp.com",
//   projectId: "tree-deb80",
//   storageBucket: "tree-deb80.appspot.com",
//   messagingSenderId: "402582428031",
//   appId: "1:402582428031:web:ce3f7bdb8f592b084aa24a"
//   };

//   firebase.initializeApp(firebaseConfig);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     const nodeRadius = 15;
//     const fontSize = 14;
//     ctx.font = `${fontSize}px Arial`;

//     const drawNode = (node, x, y, level) => {
//       ctx.beginPath();
//       ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
//       ctx.fillStyle = "white";
//       ctx.fill();
//       ctx.stroke();

//       ctx.fillStyle = "black";
//       ctx.fillText(node.value, x - fontSize / 2, y + fontSize / 2);
//       const nodeGap = 65+level * 16;
//       if (node.left !== null) {
//         const leftChild = nodes[node.left];
//         const leftX = x - nodeGap/Math.pow(2.6,level);
//         const leftY = y + nodeGap;

//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(leftX, leftY - nodeRadius);
//         ctx.stroke();
//         drawNode(leftChild, leftX, leftY, level + 1);
//       }

//       if (node.right !== null) {
//         const rightChild = nodes[node.right];
//         const rightX = x + nodeGap/Math.pow(2.3,level);
//         const rightY = y + nodeGap;

//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(rightX, rightY - nodeRadius);
//         ctx.stroke();
//         drawNode(rightChild, rightX, rightY, level + 1);
//       }
//     };

//     nodes.forEach((node, index) => {
//       if (index === 0) {
//         drawNode(node, canvas.width / 2, nodeRadius + 50, 0);
//       }
//     });
//   }, [nodes]);

//   const handleInsert = (value) => {
//     const ivalue = parseInt(value, 10);
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null,
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   // const handleSave = () => {
//   //   const db = firebase.firestore();
//   //   db.collection("trees").add({
//   //     nodes: nodes,
//   //   });
//   //   // setNodes([]);
//   // };
//   const handleSave = () => {
//     const db = firebase.firestore();
//     if (trees.length === 0) {
//       // No existing trees, create a new one
//       db.collection("trees")
//         .add({
//           nodes: nodes,
//         })
//         .then(() => {
//           console.log("Tree saved successfully!");
//         })
//         .catch((error) => {
//           console.error("Error saving tree:", error);
//         });
//     } else {
//       // Update the first tree in the collection
//       const treeId = trees[0].id;
//       db.collection("trees")
//         .doc(treeId)
//         .update({
//           nodes: nodes,
//         })
//         .then(() => {
//           console.log("Tree updated successfully!");
//         })
//         .catch((error) => {
//           console.error("Error updating tree:", error);
//         });
//     }
//   };

//   useEffect(() => {
//     const db = firebase.firestore();
//     const unsubscribe = db.collection("trees").onSnapshot((querySnapshot) => {
//       const treeData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setTrees(treeData);
//     });
//     return unsubscribe;
//   }, []);

//   const handleLoadTree = (treeId) => {
//     const db = firebase.firestore();
//     db.collection("trees")
//       .doc(treeId)
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           setNodes(doc.data().nodes);
//         } else {
//           console.log("No such document!");
//         }
//       })
//       .catch((error) => {
//         console.log("Error getting document:", error);
//       });
//   };

//   // const handleLoadTree = (treeId) => {
//   //   const db = firebase.firestore();
//   //   db.collection("trees")
//   //     .doc(treeId)
//   //     .get()
//   //     .then((doc) => {
//   //       if (doc.exists) {
//   //         const treeData = doc.data();
//   //         setNodes(treeData.nodes);
//   //         setTrees([]); // Clear the trees state so that the dropdown shows only the loaded tree
//   //       } else {
//   //         console.log("No such document!");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error getting document:", error);
//   //     });
//   // };

//   return (
//     <div>
//       <canvas ref={canvasRef} width={900} height={600}></canvas>
//       <input type="text" onChange={(e) => setValue(e.target.value)} />
//       <button onClick={() => handleInsert(value)}>Insert</button>
//       <button onClick={() => handleSave()}>Save Tree</button>
//       <select onChange={(e) => handleLoadTree(e.target.value)}>
//         <option value="">Select a saved tree</option>
//         {trees.map((tree) => (
//           <option key={tree.id} value={tree.id}>
//             {tree.id}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function App() {
//       return (
//         <div className="App">
//           <BST />
//         </div>
//       );
//     }

//     export default App;

// import React, { useState, useEffect, useRef } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// function BST() {
//   const [nodes, setNodes] = useState([]);
//   const [value, setValue] = useState("");
//   const [treeName, setTreeName] = useState("");
//   const [shapeType, setShapeType] = useState("circle");
//   const [savedTrees, setSavedTrees] = useState([]);
//   const [selectedTree, setSelectedTree] = useState("");

//   const canvasRef = useRef(null);

//   const firebaseConfig = {
//     apiKey: "AIzaSyAzrjEU6Pr12gOT_hhqg8j2eHA37s9SUGE",
//     authDomain: "tree-deb80.firebaseapp.com",
//     projectId: "tree-deb80",
//     storageBucket: "tree-deb80.appspot.com",
//     messagingSenderId: "402582428031",
//     appId: "1:402582428031:web:ce3f7bdb8f592b084aa24a",
//   };

//   firebase.initializeApp(firebaseConfig);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     const nodeRadius = 15;
//     const fontSize = 12;
//     ctx.font = `${fontSize}px Arial`;

//     const drawNode = (node, x, y, level) => {
//       ctx.beginPath();
//       if (shapeType === "circle") {
//         ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
//       } else if (shapeType === "square") {
//         const squareSize = nodeRadius * 2;
//         ctx.rect(x - nodeRadius, y - nodeRadius, squareSize, squareSize);
//       }
//       ctx.fillStyle = "white";
//       ctx.fill();
//       ctx.stroke();

//       ctx.fillStyle = "black";
//       ctx.fillText(node.value, x - fontSize / 2, y + fontSize / 2);
//       const nodeGap = 65 + level * 5;
//       if (node.left !== null) {
//         const leftChild = nodes[node.left];
//         const leftX = x - nodeGap / Math.pow(2, level);
//         const leftY = y + nodeGap;

//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(leftX, leftY - nodeRadius);
//         ctx.stroke();
//         drawNode(leftChild, leftX, leftY, level + 1);
//       }

//       if (node.right !== null) {
//         const rightChild = nodes[node.right];
//         const rightX = x + nodeGap / Math.pow(2, level);
//         const rightY = y + nodeGap;

//         ctx.beginPath();
//         ctx.moveTo(x, y + nodeRadius);
//         ctx.lineTo(rightX, rightY - nodeRadius);
//         ctx.stroke();
//         drawNode(rightChild, rightX, rightY, level + 1);
//       }
//     };

//     nodes.forEach((node, index) => {
//       if (index === 0) {
//         drawNode(node, canvas.width / 2, nodeRadius + 50, 0);
//       }
//     });
//   }, [nodes, shapeType]);

//   useEffect(() => {
//     const getSavedTrees = async () => {
//       try {
//         const db = firebase.firestore();
//         const snapshot = await db.collection("trees").get();
//         const treeOptions = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           name: doc.id,
//           nodes: doc.data().nodes,
//         }));
//         setSavedTrees(treeOptions);
//       } catch (error) {
//         console.error("Error fetching saved trees:", error);
//       }
//     };

//     getSavedTrees();
//   }, []);

//   const handleInsert = (value) => {
//     const ivalue = parseInt(value, 10);
//     if (isNaN(ivalue)) {
//       alert("Please enter a valid number.");
//       return;
//     }
//     setValue(ivalue);
//     const newNode = {
//       value: value,
//       left: null,
//       right: null,
//       parent: null,
//     };
//     let currentNodeIndex = 0;
//     while (true) {
//       const currentNode = nodes[currentNodeIndex];
//       if (!currentNode) {
//         setNodes([...nodes, newNode]);
//         break;
//       }
//       if (ivalue <= currentNode.value) {
//         if (currentNode.left === null) {
//           const newNodes = [...nodes];
//           currentNode.left = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           const newNodes = [...nodes];
//           currentNode.right = newNodes.length;
//           newNode.parent = currentNodeIndex;
//           newNodes.push(newNode);
//           newNodes[currentNodeIndex] = currentNode;
//           setNodes(newNodes);
//           break;
//         } else {
//           currentNodeIndex = currentNode.right;
//         }
//       }
//     }
//   };

//   const handleShapeChange = (e) => {
//     setShapeType(e.target.value);
//   };

//   const handleSave = () => {
//     const existingTree = savedTrees.find((tree) => tree.name === treeName);

//     if (existingTree && treeName !== selectedTree) {
//       const confirmation = window.confirm(
//         `A tree with the name "${treeName}" already exists. Do you want to override it?`
//       );

//       if (!confirmation) {
//         alert("Please enter a new tree name.");
//         return;
//       }
//     }
//     const db = firebase.firestore();
//     const treeData = {
//       nodes: nodes,
//     };

//     if (treeName.trim() === "") {
//       console.error("Tree name cannot be empty.");
//       return;
//     }

//     const selectedTreeOptions = savedTrees.find(
//       (tree) => tree.id === selectedTree
//     );
//     selectedTreeOptions.nodes = nodes;
//     db.collection("trees")
//       .doc(treeName)
//       .set(treeData)
//       .then(() => {
//         console.log("Tree saved successfully with name:", treeName);
//         alert("tree saved sucessfully");

//         setSelectedTree(treeName);
//         setSavedTrees((prevTrees) => {
//           const treeExists = prevTrees.find((tree) => tree.name === treeName);
//           if (treeExists) {
//             return prevTrees;
//           }
//           return [...prevTrees, { id: treeName, name: treeName }];
//         });
//         // setSavedTrees([...savedTrees,{id:treeName,name:treeName}]) ;
//       })
//       .catch((error) => {
//         console.error("Error saving tree:", error);
//       });
//   };

//   const handleTreeSelect = async (e) => {
//     const selectedTreeName = e.target.value;
//     if (selectedTree !== "newtree") {
//       setSelectedTree(selectedTreeName);
//       setTreeName(selectedTreeName);
//       // try {
//       //   const db = firebase.firestore();
//       //   const snapshot = await db
//       //     .collection("trees")
//       //     .doc(selectedTreeName)
//       //     .get();
//       //   const treeData = snapshot.data();
//       //   if (treeData && treeData.nodes) {
//       //     setNodes(treeData.nodes);
//       //   } else {
//       //     setNodes([]);
//       //   }
//       // } catch (error) {
//       //   console.error("Error fetching tree data:", error);
//       // }

//       const selectedTreeOptions = savedTrees.find(
//         (tree) => tree.id === selectedTree
//       );
//       // if(selectedTree){
//       //   setNodes(selectedTreeOptions.nodes);
//       // }
//       // else{
//       //   setNodes([]);
//       // }
//       setNodes(selectedTreeOptions.nodes);
//     } else {
//       setSelectedTree(null);
//       setNodes([]);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="number"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button onClick={() => handleInsert(value)}>Insert</button>
//         <input
//           type="text"
//           value={treeName}
//           onChange={(e) => setTreeName(e.target.value)}
//           placeholder="Enter tree name"
//         />
//         <button onClick={() => handleSave()}>Save Tree</button>
//         <select value={selectedTree} onChange={handleTreeSelect}>
//           <option value="newtree">Create new tree</option>
//           {savedTrees.map((tree) => (
//             <option key={tree.id} value={tree.id}>
//               {tree.name}
//             </option>
//           ))}
//         </select>
//         {/* <button onClick={() => handleSave()}>Save Tree</button> */}
//         <select value={shapeType} onChange={handleShapeChange}>
//           <option value="circle">Circle</option>
//           <option value="square">Square</option>
//         </select>
//       </div>
//       <canvas ref={canvasRef} width={900} height={900}></canvas>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <BST />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function BST() {
  const [nodes, setNodes] = useState([]);
  const [value, setValue] = useState("");
  const [treeName, setTreeName] = useState("");
  const [shapeType, setShapeType] = useState("circle");
  const [savedTrees, setSavedTrees] = useState([]);
  const [selectedTree, setSelectedTree] = useState("");

  const canvasRef = useRef(null);

  const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyAzrjEU6Pr12gOT_hhqg8j2eHA37s9SUGE",
    authDomain: "tree-deb80.firebaseapp.com",
    projectId: "tree-deb80",
    storageBucket: "tree-deb80.appspot.com",
    messagingSenderId: "402582428031",
    appId: "1:402582428031:web:ce3f7bdb8f592b084aa24a",
  };

  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const nodeRadius = 15;
    const fontSize = 12;
    ctx.font = `${fontSize}px Arial`;

    const drawNode = (node, x, y, level) => {
      ctx.beginPath();
      if (shapeType === "circle") {
        ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
      } else if (shapeType === "square") {
        const squareSize = nodeRadius * 2;
        ctx.rect(x - nodeRadius, y - nodeRadius, squareSize, squareSize);
      }
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.fillText(node.value, x - fontSize / 2, y + fontSize / 2);
      const nodeGap = 65 + level * 5;
      if (node.left !== null) {
        const leftChild = nodes[node.left];
        const leftX = x - nodeGap / Math.pow(2, level);
        const leftY = y + nodeGap;

        ctx.beginPath();
        ctx.moveTo(x, y + nodeRadius);
        ctx.lineTo(leftX, leftY - nodeRadius);
        ctx.stroke();
        drawNode(leftChild, leftX, leftY, level + 1);
      }

      if (node.right !== null) {
        const rightChild = nodes[node.right];
        const rightX = x + nodeGap / Math.pow(2, level);
        const rightY = y + nodeGap;

        ctx.beginPath();
        ctx.moveTo(x, y + nodeRadius);
        ctx.lineTo(rightX, rightY - nodeRadius);
        ctx.stroke();
        drawNode(rightChild, rightX, rightY, level + 1);
      }
    };

    nodes.forEach((node, index) => {
      if (index === 0) {
        drawNode(node, canvas.width / 2, nodeRadius + 50, 0);
      }
    });
  }, [nodes, shapeType]);

  useEffect(() => {
    const getSavedTrees = async () => {
      try {
        const db = firebase.firestore();
        const snapshot = await db.collection("trees").get();
        const treeOptions = snapshot.docs.map((doc) => ({
          name: doc.id,
          nodes: doc.data().nodes,
        }));
        setSavedTrees(treeOptions);
      } catch (error) {
        console.error("Error fetching saved trees:", error);
      }
    };

    getSavedTrees();
  }, []);

  const handleInsert = (value) => {
    const ivalue = parseInt(value, 10);
    if (isNaN(ivalue)) {
      alert("Please enter a valid number.");
      return;
    }
    setValue(ivalue.toString());
    const newNode = {
      value: value,
      left: null,
      right: null,
      parent: null,
    };
    let currentNodeIndex = 0;
    while (true) {
      const currentNode = nodes[currentNodeIndex];
      if (!currentNode) {
        setNodes([...nodes, newNode]);
        break;
      }
      if (ivalue <= currentNode.value) {
        if (currentNode.left === null) {
          const newNodes = [...nodes];
          currentNode.left = newNodes.length;
          newNode.parent = currentNodeIndex;
          newNodes.push(newNode);
          newNodes[currentNodeIndex] = currentNode;
          setNodes(newNodes);
          break;
        } else {
          currentNodeIndex = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          const newNodes = [...nodes];
          currentNode.right = newNodes.length;
          newNode.parent = currentNodeIndex;
          newNodes.push(newNode);
          newNodes[currentNodeIndex] = currentNode;
          setNodes(newNodes);
          break;
        } else {
          currentNodeIndex = currentNode.right;
        }
      }
    }
  };

  const handleShapeChange = (e) => {
    setShapeType(e.target.value);
  };

  const handleSave = () => {
    const existingTree = savedTrees.find((tree) => tree.name === treeName);

    if (existingTree && treeName !== selectedTree) {
      const confirmation = window.confirm(
        `A tree with the name "${treeName}" already exists. Do you want to override it?`
      );

      if (!confirmation) {
        alert("Please enter a new tree name.");
        return;
      }
    }
    const db = firebase.firestore();
    const treeData = {
      nodes: nodes,
    };

    if (treeName.trim() === "") {
      console.error("Tree name cannot be empty.");
      return;
    }

    db.collection("trees")
      .doc(treeName)
      .set(treeData)
      .then(() => {
        console.log("Tree saved successfully with name:", treeName);
        alert("Tree saved successfully.");

        setSelectedTree(treeName);
        setSavedTrees((prevTrees) => {
          // const treeExists = prevTrees.find((tree) => tree.name === treeName);
          if (existingTree) {
            existingTree.nodes=nodes;
            return prevTrees;
          }
          return [...prevTrees, { name: treeName, nodes:nodes }];
        });
      })
      .catch((error) => {
        console.error("Error saving tree:", error);
      });
  };

  const handleTreeSelect = async (e) => {
    const selectedTreeName = e.target.value;
    if (selectedTreeName !== "newtree") {
      setSelectedTree(selectedTreeName);
      // setTreeName(selectedTreeName);

      // const selectedTreeOptions = savedTrees.find(
      //   (tree) => tree.name === selectedTreeName
      // );
      // setNodes(selectedTreeOptions.nodes);
      if (selectedTreeName === treeName) {
        setNodes([...nodes]);
      } else {
        const selectedTreeOptions = savedTrees.find(
          (tree) => tree.name === selectedTreeName
        );
        setNodes(selectedTreeOptions.nodes);
        setTreeName(selectedTreeName);
      }
    } else {
      setSelectedTree("");
      setTreeName("");
      setNodes([]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => handleInsert(value)}>Insert</button>
        <input
          type="text"
          value={treeName}
          onChange={(e) => setTreeName(e.target.value)}
          placeholder="Enter tree name"
        />
        <button onClick={() => handleSave()}>Save Tree</button>
        <select value={selectedTree} onChange={handleTreeSelect}>
          <option value="newtree">Create a New Tree</option>
          {savedTrees.map((tree) => (
            <option key={tree.name} value={tree.name}>
              {tree.name}
            </option>
          ))}
        </select>
        <select value={shapeType} onChange={handleShapeChange}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
        </select>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}

export default BST;

