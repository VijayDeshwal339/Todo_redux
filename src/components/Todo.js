// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addTodo, toggleTodo, selectTodos } from '../store/slices/todoSlice';

// import Modal from 'react-modal';
// import classes from './Todo.module.css';

// const Todo = ({ todos, addTodo, toggleTodo }) => {
//   const [text, setText] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddTodo = () => {
//     if (text.trim() !== '') {
//       addTodo({ text });
//       setText('');
//       setIsModalOpen(false);
//     }
//   };

//   const handleToggleTodo = (index) => {
//     toggleTodo({ index });
//   };

//   const getTotalTodos = () => todos.length;

//   const getSelectedTodos = () => todos.filter((todo) => todo.completed).length;

//   return (
//     <div  className={classes['Main']}>
//       <div  className={classes['Second-Main']}>
//         <div  className={classes['Todo-Img']}>
//           <h2>Todo</h2>
//         </div>
//         <div style={{ display: 'flex' }}>
//           <h4 style={{ flexGrow: 1 }}>Task list</h4>
//           <h6 style={{ color: '#9999A3' }}>{getSelectedTodos()}/{getTotalTodos()} done</h6>
//         </div>

//         <div style={{ marginTop: '-30px' }}>
//           {todos.map((todo, index) => (
//             <div key={index} style={{ display: 'flex', alignItems: 'center'}}>
//               <div>
//               <div className={classes['Menu-Icon']}></div>
//               <div className={classes['Menu-Icon']}></div>
//               <div className={classes['Menu-Icon']}></div>
//               </div>
//               <input type='checkbox' checked={todo.completed} onChange={() => handleToggleTodo(index)} style={{ marginTop: '2px', marginLeft: '10px' }} />
//               <p style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'grey' : 'black', marginLeft: '10px' }}>
//                 {todo.text}
//               </p>
//               <div >
//               <hr className={classes['Custom-Divider']} />
//             </div>
//             </div>
            
           
//           ))}
//         </div>
       
//         <button
//           style={{ backgroundColor: "#2F69FE", padding: '14px', width: '100%', borderColor: '#2F69FE', borderRadius: '35px', marginBottom: '20px', color: '#FFFFFF' }}
//           onClick={() => setIsModalOpen(true)}
//         >
//         +          Add Task
//         </button>

//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={() => setIsModalOpen(false)}
//           contentLabel="Add Task Modal"
//         >
//           <h2>Add Task</h2>
//           <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//           <button onClick={handleAddTodo}>Add Todo</button>
//           <button onClick={() => setIsModalOpen(false)}>Cancel</button>
//         </Modal>

//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   todos: selectTodos(state),
// });

// const mapDispatchToProps = {
//   addTodo,
//   toggleTodo,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Todo);


// Import necessary libraries and styles

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, selectTodos } from '../store/slices/todoSlice';
import Modal from 'react-modal';
import classes from './Todo.module.css';

const Todo = ({ todos, addTodo, toggleTodo }) => {
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo({ text });
      setText('');
      setIsModalOpen(false);
    }
  };

  const handleToggleTodo = (index) => {
    toggleTodo({ index });
  };

  const getTotalTodos = () => todos.length;

  const getSelectedTodos = () => todos.filter((todo) => todo.completed).length;

  return (
    <div className={classes['Main']}>
      <div className={classes['Second-Main']}>
        <div className={classes['Todo-Img']}>
          <h2>Todo</h2>
        </div>
        <div style={{ display: 'flex' }}>
          <h4 style={{ flexGrow: 1 }}>Task list</h4>
          <h6 style={{ color: '#9999A3' }}>{getSelectedTodos()}/{getTotalTodos()} done</h6>
        </div>

        <div style={{ marginTop: '-30px' }}>
        {todos.map((todo, index) => (
           <div>
  <div key={index} style={{ display: 'flex', alignItems: 'center',textAlign:'center',marginBottom:'20px' }}>
    <div>
      <div className={classes['Menu-Icon1']}></div>
      <div className={classes['Menu-Icon2']}></div>
      <div className={classes['Menu-Icon3']}></div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => handleToggleTodo(index)}
        style={{ marginTop: '20px', marginLeft: '10px' }}
      />
      <p
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'grey' : 'black',
          marginLeft: '10px',
          marginBottom: '0',
        }}
      >
        {todo.text}
      </p>
    </div>
   
  </div>
 
   <hr className={classes['Custom-Divider']} />
   </div>
))}
        </div>

        <button
          style={{
            backgroundColor: '#2F69FE',
            padding: '14px',
            width: '100%',
            borderColor: '#2F69FE',
            borderRadius: '35px',
            marginBottom: '20px',
            color: '#FFFFFF',
          }}
          onClick={() => setIsModalOpen(true)}
        >
          + Add Task
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel='Add Task Modal'
        >
          <h2>Add Task</h2>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleAddTodo}>Add Todo</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
