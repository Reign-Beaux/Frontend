import { useEffect, useRef, useState, type ReactNode } from "react";

import styles from "./Accordion.module.scss";

interface Props {
  label: string;
  children: ReactNode;
  className?: string;
}

export const Accordion = ({ label, children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0px");

  const currentClassName = className ? `${styles.accordion} ${className}` : styles.accordion;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef.current?.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen, children]);

  return (
    <div className={`${currentClassName} ${isOpen ? styles.active : ""}`}>
      <button className={styles.accordionLabel} onClick={toggleAccordion}>
        {label}
        <span className={styles.accordionIcon}>▼</span>
      </button>
      <div className={styles.accordionContent} style={{ maxHeight: height }} ref={contentRef}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
};
