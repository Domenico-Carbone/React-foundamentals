import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts(){
    return (
      <Section id="core-concepts" title="Core concepts">
        <ul>
          {CORE_CONCEPTS.map( (conceptItem)=>(<CoreConcept {...conceptItem} key={conceptItem.title} />
          ))}
          {/* <CoreConcept {...CORE_CONCEPTS[0]} 
          // title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[1]}
          // title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[2]}
          // title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[3]}  */}
          {/* // title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image} */}
           {/* /> */}
        </ul>
      </Section>
    );
}