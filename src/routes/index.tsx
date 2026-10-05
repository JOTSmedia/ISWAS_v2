import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { comparisons, lede, nav, stars, type Star } from "@/content";
import { Dossier } from "@/components/dossier";
import { LoadScreen } from "@/components/load-screen";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [open, setOpen] = useState<Star | null>(null);

  return (
    <>
      <LoadScreen />
      <header className="mast">
        <div className="mast-inner">
          <a className="mast-mark" href="#overview">
            <span className="mark-rest">it started with a</span>
            <span className="mark-scream">scream</span>
          </a>
          <nav className="nav" aria-label="Sections">
            {nav.map((item) => (
              <a key={item.href} className="uc" href={item.href}>
                {item.index} {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="sheet">
        <section className="lockup" id="overview">
          <h1>
            <span className="mark-rest">it started with a</span>
            <span className="mark-scream">scream</span>
          </h1>
          <p className="lede caps">{lede}</p>
        </section>

        <section className="section" id="gallery">
          <p className="kicker uc">Gallery wall</p>
          <h2 className="page-title uc">The room</h2>
          <div className="rule" />
          <p className="prose caps">
            Portraits hang full plate. Open a frame here or a name below. The dossier shows the whole
            picture, centered, not a crop of the hairline.
          </p>
          <div className="wall">
            {stars.map((star, index) => (
              <button key={star.name} className="frame" type="button" onClick={() => setOpen(star)}>
                <span className="mat">
                  <img src={star.image} alt="" />
                </span>
                <span className="cap uc">
                  {String(index + 1).padStart(2, "0")} {star.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="need">
          <p className="kicker uc">02 — Need</p>
          <h2 className="page-title uc">Need</h2>
          <div className="rule" />
          <div className="prose caps">
            <p>Horror’s run in theaters, on home video, and in merchandising has not been matched.</p>
            <p>
              No genre has matched horror’s run across theatrical exhibition, home video, and merchandising.
              Boutique labels in both video and apparel have pulled landmark films, and titles once left in
              obscurity, back into circulation. Those works have found new audiences without losing the people
              who were there first.
            </p>
            <p>
              Interest in the stories behind these films and series has not let up. The people in a position to
              tell them are the ones who made the work, and who went on to build distinguished careers of their
              own.
            </p>
          </div>
        </section>

        <section className="section" id="stars">
          <p className="kicker uc">03 — Stars</p>
          <h2 className="page-title uc">Stars</h2>
          <div className="rule" />
          <p className="prose caps">
            Nine careers that began with a horror credit — before the awards, the franchises, and the household
            names.
          </p>
          <div className="stars">
            {stars.map((star, index) => (
              <button key={star.name} className="star" type="button" onClick={() => setOpen(star)}>
                <img src={star.image} alt="" />
                <span className="star-copy">
                  <span className="meta uc">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="uc">{star.name}</h3>
                  <p className="meta uc">{star.origin}</p>
                  <p className="body caps">{star.body}</p>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="form">
          <p className="kicker uc">04 — Form</p>
          <h2 className="page-title uc">Form</h2>
          <div className="rule" />
          <div className="prose caps">
            <p>The subject is what the talent says. The rest of the picture supports that conversation.</p>
            <p>
              This is not built as a host’s tour of the genre, and it is not built on reenactment. The picture
              is carried by sit-down interviews and by archival material: the films that started these careers,
              and the careers that followed, in the words of the people who lived both.
            </p>
            <p>01 Sit-down interviews. What the talent discusses is the scene. The interview is the record, not a bridge to another format.</p>
            <p>02 Archive in support. Archival material carries memory, context, and the work itself. It does not replace the person speaking.</p>
            <p>03 The horror credit is the start. The horror credit is where the story starts. It is not asked to be the whole career, or the whole film.</p>
          </div>
        </section>

        <section className="section" id="comparison">
          <p className="kicker uc">05 — Comparison</p>
          <h2 className="page-title uc">Comparison</h2>
          <div className="rule" />
          <p className="prose caps">
            The audience for serious horror nonfiction is already on the record. These series, on AMC and on
            Shudder, are the comparison set in the preliminary packet.
          </p>
          <aside className="note">
            <p className="kicker uc">Distinction</p>
            <p className="body caps">
              Those series showed that viewers will watch for the history, the craft, and the people behind the
              films. it started with a scream asks a narrower question: not only how the films were made, but
              what the stars remember of the credit that started the career.
            </p>
          </aside>
          {comparisons.map((item) => (
            <article className="cmp" key={item.title}>
              <div className="cmp-head">
                <h3 className="uc">{item.title}</h3>
                <p className="meta uc">{item.meta}</p>
              </div>
              <p className="body caps">{item.blurb}</p>
            </article>
          ))}
        </section>

        <section className="section" id="contact">
          <p className="kicker uc">06 — Contact</p>
          <h2 className="page-title uc">Contact</h2>
          <div className="rule" />
          <div className="people">
            <article className="card">
              <h3 className="uc">Malek Akkad</h3>
              <p className="meta uc">Chief Executive Officer</p>
              <p className="caps">
                <a href="mailto:Malek@trancasfilms.com">Malek@trancasfilms.com</a>
              </p>
            </article>
            <article className="card">
              <h3 className="uc">Ryan Freimann</h3>
              <p className="meta uc">Vice President of Business Affairs</p>
              <p className="caps">
                <a href="mailto:Ryan@trancasfilms.com">Ryan@trancasfilms.com</a>
              </p>
            </article>
          </div>
          <article className="card addr">
            <p className="caps">
              Trancas International Films, Inc.
              <br />
              2021 Pontius Avenue
              <br />
              Los Angeles, California 90025
            </p>
            <p className="caps">
              <a href="tel:+13104776569">310-477-6569</a>
            </p>
            <p className="meta uc">Trancas International · Further Front · Compass International Pictures</p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="inner">
          <span className="caps">it started with a scream</span>
          <span className="uc">© 2023 · WGA No. 2310392</span>
        </div>
      </footer>

      <Dossier star={open} onClose={() => setOpen(null)} />
    </>
  );
}
