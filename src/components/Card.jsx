import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { inlineStyles as sInline } from '../assets/styles/inlinestyles';

import styles from './Card.module.scss';

const Card = (props) => {
  const [selected, setSelected] = useState(false);
  const [isFirstHover, setIsFirstHover] = useState(false);
  const [hoverStyles, setHoverStyles] = useState({});
  const [description, setDescription] = useState(props.description);
  const [footerText, setFooterText] = useState(props.footer);

  useEffect(() => {
    if (props.disabled) {
      onDisabled();
    }
  }, []);

  const onSelectedAdd = () => {
    if (selected === true) {
      setHoverStyles({});
      setDescription(props.description);
    }
    setSelected(!selected);
  };

  const handleMouseLeave = () => {
    if (selected === true && isFirstHover === true) {
      setHoverStyles({});
      setDescription(props.description);
    }
    if (selected === true) {
      setIsFirstHover(true);
    }
  };

  const handleMouseEnter = () => {
    if (selected === true && isFirstHover === true) {
      setHoverStyles({
        content: sInline.boxSize,
        line: sInline.lineStyle,
        size: sInline.sizeStyle,
        label: sInline.labelStyle,
      });
      setDescription(props.question);
    }
  };

  const onDisabled = () => {
    setHoverStyles({
      content: sInline.contentDisStyle,
      img: sInline.opacityStyle,
      size: sInline.backgroundGrayStyle,
      line: sInline.lineGrayStyle,
      label: sInline.colorTextGray,
    });
    setFooterText(`печалька, ${props.with} закончился`);
  };

  return (
    <div className={styles.card}>
      <div
        onClick={onSelectedAdd}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={hoverStyles.content}
        className={
          selected
            ? [styles.card__content, styles.card__content_active].join(' ')
            : [styles.card__content, styles.card__content_default].join(' ')
        }>
        <div style={hoverStyles.line} className={styles.card__line}></div>
        <div className={styles.card__texts}>
          <p style={hoverStyles.label} className={styles.card__label}>
            {description}
          </p>
          <h4 className={styles.card__brand}>Нямушка</h4>
          <p className={styles.card__with}>{props.with}</p>
          <div className={styles.card__description}>
            <p>
              <span>{props.portions} </span>
              порций
            </p>
            <p>
              <span>{props.quantity}</span> {props.mouse}
            </p>
          </div>
        </div>
        <div
          style={hoverStyles.size}
          className={
            selected ? [styles.card__size, styles.card__size_active].join(' ') : styles.card__size
          }>
          <p className={styles.card__amount}>{props.size}</p>
          <p className={styles.card__kilogram}>кг</p>
        </div>
        <div style={hoverStyles.img} className={styles.card__image}>
          <img src="img/cat.png" alt="cat" />
        </div>
      </div>
      <div className={styles.card__footer}>
        {props.disabled ? (
          <p className={styles.card__ended}>Печалька, с курой закончился.</p>
        ) : (
          <div>
            {selected ? (
              footerText
            ) : (
              <div>
                Чего сидишь Порадуй котэ,{' '}
                <span onClick={onSelectedAdd}>
                  <button className={styles.card__button}>купи</button>.
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
