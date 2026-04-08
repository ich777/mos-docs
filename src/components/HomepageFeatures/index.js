import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📦 Modular Virtualization',
    description: (
      <>
        Support for <b>Docker</b>, <b>LXC</b>, and <b>VMs</b> out of the box.
        Manage containers and virtual machines seamlessly.
      </>
    ),
  },
  {
    title: '💾 Smart Storage',
    description: (
      <>
        Built-in <b>mergerfs</b> and <b>SnapRAID</b> for flexible, protected storage.
        Combine disks and protect your data effortlessly.
      </>
    ),
  },
  {
    title: '🔒 Open Source & Privacy',
    description: (
      <>
        No telemetry, no tracking, no data collection. Everything runs locally and stays fully under your control.
      </>
    ),
  },
  {
    title: '⚡ Energy Efficient',
    description: (
      <>
        Lightweight OS based on <b>Devuan</b> for home servers.
        Minimal overhead and maximum efficiency.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
