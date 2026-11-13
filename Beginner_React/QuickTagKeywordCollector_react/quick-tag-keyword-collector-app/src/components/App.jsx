import TagInput from "./TagInput";
import AddTagButton from "./AddTagButton";
import TagBadge from "./TagBadge";
import TotalTagCounter from "./TotalTagCounter";
import EmptyStateNotice from "./EmptyStateNotice";

import { useState } from "react";

function App() {
  const [tagInputsList, setTagInputsList] = useState([]);
  const [tagIputtedByUser, setTagIputtedByUser] = useState('');
  const [id, setId] = useState(0);

  return (
    <>
      <TagInput
        tagIputtedByUser={tagIputtedByUser}
        setTagIputtedByUser={setTagIputtedByUser} />
      <AddTagButton
        tagInputsList={tagInputsList}
        setTagInputsList={setTagInputsList}
        tagIputtedByUser={tagIputtedByUser}
        id={id}
        setId={setId}
        setTagIputtedByUser={setTagIputtedByUser} />
      <TagBadge
        tagInputsList={tagInputsList} />
      <TotalTagCounter
        tagInputsList={tagInputsList} />
      <EmptyStateNotice
        tagInputsList={tagInputsList} />
    </>
  )
}

export default App;
