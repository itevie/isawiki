import Markdown from "react-markdown";
import Button from "./dawn-ui/components/Button";
import Column from "./dawn-ui/components/Column";
import Container from "./dawn-ui/components/Container";
import Content from "./dawn-ui/components/Content";
import GoogleMatieralIcon from "./dawn-ui/components/GoogleMaterialIcon";
import Row from "./dawn-ui/components/Row";
import Sidebar from "./dawn-ui/components/Sidebar";
import Words from "./dawn-ui/components/Words";
import remarkGfm from "remark-gfm";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SidebarButton from "./dawn-ui/components/SidebarButton";
import Chip from "./dawn-ui/components/Chip";

const text = `- classical dr. katz (a pet cat who gained hypno certifications...) 
# hypno as treatment:
- hypno is meant to be given alongside normal treatment (e.g. like acupuncture)
- Professor Orne quote: **If a person is not profesionally qualified to treat something without hypnosis, then they're not qualified to reat it with hypnosis, either. First you look for that profesional certificate on the wall -- fiscician, dentist, clinical psychologist, or whatever. Then you look for the certificate of hypnosis**

# stuff that doesn't work:
- memory recovery
	- memory is encoded in fragments
	- you put them together to formulate the full memory
	- recall forces you to fill in the gaps in the memory bc they're fragments
	- therefore, mem. recov. is not reliable
- age regression
	- it's a fantasy. period. 
- **NOTE: YOU CAN LITERALLY GASLIGHT VIA THIS. VERY WELL. TOO WELL FOR ANYONE'S BENEFIT.**
- subcon signalling doesn't work.   

# Re: NLP
little note: ironically kirsch did look at NLP and then proceeded to do experiments disproving it :)
- anything relating to rapport has been disproven
- therapy via NLP stuff has been proven to be worse than what's standard
- double induction doesn't work :) - again, the simple stuff was better **XDDDDDD**

CBT + hypno has better results than CBT alone
weight loss thingy: hypno increased weight loss, and also helped keep that weight loss (which usually doesn't happen)
hypno analgesia: 
- More suggestible = higher effect this has
- 75% has substantial relief
- Reduces need for medication
	- SIGNIFICANCE: we've thought about this before, opioid crisis can sum it up. 
- NEUROLOGICAL CONNECTIONS!?!?!?!?
- Surgery without anaesthesia 

# le trance :)
- ## myth: you need trance (esp for harder suggestions), deeper trance = "deeper" phenomena
	- Nope. **STATE THEORY WAR :)))))))**
	- ### HOWEVER (caveat):
		- inductions help by 20% :)
		- _personal comment: think bedside effect_
- ### Stroop effect experiment:
	- Stroop effect can be reduced via suggestions
	- Induction or not, results were similar. 
- ### Seeing color:
	- you can get the left fusiform (involved in percieving color) to be active via suggestion
	- the setup was add color to a black and white image
- ### pain relief:
	- open to suggestion documentary (1999)
- ## neurosci behind this stuff:
	- high's show reduction in the brain called the "default mode"
		- default mode is the "doing nothing" mode of existence
		- as soon as you engage in a task, lowered default mode. 
	- _Mild conclusion: you're actively engaged while in the state, i.e. high's are engaging in the task of hypno _
		- Thus: (copied verbatim) Hypno is a normal state of focused attention in whic you are motivated and trying to do something
		- Hypno is impacted by:
			- Willingness
			- Ability
			- belief (expectancy)
			- cognitive effort - no passive sitting round
		- **THE INDUCTION INCREASES SAID MOTIVATION, EXPECTANCY, AND EFFORT :)**
	- low's don't do this "default mode" thingy. 

# convincing people that they were good hypnotic subjects:
- haven't done hypno before
- assess hypnotizability on control
- for the other group, convincer was red light in the room (while suggesting that the room was becoming red)
_interruption: why am I able to do this effect now all of a sudden...this is getting out of hand_
- and other lights too (blue, green, flickering room lights)
- **RESULTS:**
![[Pasted image 20250203175406.png]]
**this is insane.**
### What's even more insane:
- During debrief, panel of lights were shown. 
- Post showing all of that, tested again for hypnotizability
	- AND THEY REMAINED THE SAME. WHAAAAAAA-
- You show them that they can do it, they now can do it :)

# antidepressants and depression:
- did meta-analysis on it
- instantly got lead front page on news platforms
- invited him to write a book about it (The Emperor's New Drugs - Exploding The Antidepressant Myth)
## How did he uncover this?
- 40% of trials are not published by pharma
- Used FOIA and obtained them. 
- Published: 3/4 show significant difference
- Unpublished: 88% show **no diff :)**
## Background on depression stuff:
- Depression is (was?) scored on the Hamilton Rating Scale for Depression
	- Ranges from 0-51 points
### Now...
- Drugs got an average 10 point improvement
	- clinically meaningful improvement
- **Placebos got 8.35 points of improvement**
- ...
- Difference was 18% in drug effect, **Placebo is 82% of effect**
- Mean difference on the Hamilton Scale was 1.8
- **For it to be clinically significant, at least a 3 point change must be observed in placebo vs drug.**
- yeah. 
- ALSO: **IT'S NOT STATISTICALLY SIGNIFICANT. 90% OF PEOPLE HAVE NO EFFECT UPON CONSUMPTION OF ANTIDEPRESSANTS.**`;

export default function App() {
  const [headings, setHeadings] = useState<[string, number][]>([]);

  useState(() => {
    const _headings = text.match(/(#{1,6}.+)/g) ?? [];
    const parsedHeadings: [string, number][] = [];
    for (const heading of _headings) {
      let depth = heading.match(/#/g)?.length || 1;
      parsedHeadings.push([heading.replace(/^(#+)/, "").trim(), depth]);
    }
    setHeadings(parsedHeadings);
  });

  return (
    <Row className="full-page">
      <Sidebar>
        <Words type="page-title" style={{ textAlign: "center" }}>
          IsaWiki
        </Words>
        <hr />
        <SidebarButton icon="apps" label="All Articles" />
        <SidebarButton icon="question_mark" label="Random Article" />
      </Sidebar>
      <Content util={["width-100"]} style={{ overflowY: "scroll" }}>
        <Column util={["width-100"]}>
          <Words type="page-title">Article Name</Words>
          <Row>
            <Row util={["small-gap", "flex-grow"]}>
              {["test", "meow", "woof"].map((x) => (
                <Button util={["round"]}>
                  <Row util={["small-gap"]}>
                    <GoogleMatieralIcon name="sell" size="16px" />
                    {x}
                  </Row>
                </Button>
              ))}
            </Row>
            <Row style={{ flexBasis: "fit-content" }}>
              <Chip icon="edit">Edit</Chip>
            </Row>
          </Row>
          <Row>
            <Container
              util={["width-100"]}
              style={{ lineHeight: "1.6", minWidth: "400px" }}
            >
              <Markdown remarkPlugins={[remarkGfm]}>
                {text.replace(/\n/g, "  \n")}
              </Markdown>
            </Container>
            <Column
              style={{
                width: "350px",
                minWidth: "100px",
                height: "fit-content",
                position: "sticky",
                top: "0px",
              }}
            >
              <Container title="Contents">
                {headings.map((x) => (
                  <>
                    <label
                      className="dawn-link dawn-link-underline"
                      style={{ marginLeft: `${(x[1] - 1) * 10}px` }}
                    >
                      {x[0].substring(0, 25)}
                    </label>
                    <br />
                  </>
                ))}
              </Container>
              <Container title="Details">Details go here</Container>
            </Column>
          </Row>
        </Column>
      </Content>
    </Row>
  );
}
