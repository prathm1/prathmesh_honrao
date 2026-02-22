import { certifications } from "@/data/certifications";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Certifications() {
  // Group by category
  const grouped = certifications.reduce<Record<string, typeof certifications>>(
    (acc, cert) => {
      if (!acc[cert.category]) acc[cert.category] = [];
      acc[cert.category].push(cert);
      return acc;
    },
    {}
  );

  return (
    <section id="certifications" className="bg-bg-dark/30">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mb-10">
            Formal credentials spanning cloud, project management, language, and development.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-bg-dark shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg-dark/60 text-left">
                  <th className="px-5 py-3 font-semibold text-ink-muted text-xs uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-5 py-3 font-semibold text-ink-muted text-xs uppercase tracking-wider">
                    Certification
                  </th>
                  <th className="px-5 py-3 font-semibold text-ink-muted text-xs uppercase tracking-wider hidden sm:table-cell">
                    Issuer
                  </th>
                  <th className="px-5 py-3 font-semibold text-ink-muted text-xs uppercase tracking-wider hidden md:table-cell">
                    Credential
                  </th>
                </tr>
              </thead>
              <tbody className="bg-bg-card divide-y divide-bg-dark">
                {Object.entries(grouped).map(([category, certs]) =>
                  certs.map((cert, j) => (
                    <tr
                      key={cert.name}
                      className="hover:bg-bg-dark/30 transition-colors"
                    >
                      {j === 0 ? (
                        <td
                          className="px-5 py-3.5 font-semibold text-brand align-top whitespace-nowrap"
                          rowSpan={certs.length}
                        >
                          <span className="tag bg-brand-100 text-brand text-xs">
                            {category}
                          </span>
                        </td>
                      ) : null}
                      <td className="px-5 py-3.5 text-ink-light font-medium">
                        {cert.name}
                      </td>
                      <td className="px-5 py-3.5 text-ink-muted hidden sm:table-cell">
                        {cert.issuer}
                      </td>
                      <td className="px-5 py-3.5 text-ink-muted font-mono text-xs hidden md:table-cell">
                        {cert.credential}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
