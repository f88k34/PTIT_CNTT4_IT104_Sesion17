import React from 'react'

export default function _userEffect() {
    //UseEffect(callback, dependencies)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        console.log("Component được render");
    }, []);
  return (
    <div>
      <button onClick={() => {}}>Count</button>
    </div>
  )
}
