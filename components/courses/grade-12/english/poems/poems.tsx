import { PoemItem, Poems, PoemTitle } from "../english";
import poems from "@/datas/grade-12/english/poems/peoms.json";

export const Poem1 = () => {
  return (
    <div className="w-full">
      <div>Library = စာကြည့်တိုက်</div>
      <Poems>
        <PoemTitle>{poems.poem1.title}</PoemTitle>

        {poems.poem1.contents.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-center flex-col items-center"
            >
              {item.stanza.map((line, index) => (
                <PoemItem key={index}>{line}</PoemItem>
              ))}
              <div>{item.paraphrase}</div>
            </div>
          );
        })}
      </Poems>
    </div>
  );
};

export const Poem2 = () => {
  return (
    <Poems>
      <PoemTitle>{poems.poem2.title}</PoemTitle>

      {poems.poem2.contents.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-center flex-col items-center"
          >
            {item.stanza.map((line, index) => (
              <PoemItem key={index}>{line}</PoemItem>
            ))}
            <div>{item.paraphrase}</div>
          </div>
        );
      })}
    </Poems>
  );
};

export const Poem3 = () => {
  return (
    <div className="w-full">
      <Poems>
        <PoemTitle>{poems.poem3.title}</PoemTitle>
        {poems.poem3.contents.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-center flex-col items-center"
            >
              {item.stanza.map((line, index) => (
                <PoemItem key={index}>{line}</PoemItem>
              ))}
              <div>{item.paraphrase}</div>
            </div>
          );
        })}
      </Poems>
    </div>
  );
};

export const Poem4 = () => {
  return (
    <Poems>
      <PoemTitle>{poems.poem4.title}</PoemTitle>
      {poems.poem4.contents.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-center flex-col items-center"
          >
            {item.stanza.map((line, index) => (
              <PoemItem key={index}>{line}</PoemItem>
            ))}
            <div>{item.paraphrase}</div>
          </div>
        );
      })}
    </Poems>
  );
};
