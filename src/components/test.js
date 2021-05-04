import React, { useState } from 'react';

function Example() {
  const [showForm, setShowForm] = useState(false);

  const showForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <form>
        <button onClick={showForm}></button>
      </form>

      {showForm && (
        <form>
          ...
        </form>
      )}
    </div>
  )
}