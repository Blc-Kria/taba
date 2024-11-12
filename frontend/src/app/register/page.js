"use client";
import { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import Footer from '@/components/Footer';

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    icon: null,
    banner: null,
    wallet: '',
    bio: '',
    projectType: 'social',
    attachments: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === 'attachments') {
        setFormData({ ...formData, [name]: Array.from(files) });
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      if (key === 'attachments') {
        formData[key].forEach(file => form.append(key, file));
      } else {
        form.append(key, formData[key]);
      }
    }

    console.log({
      name: formData.name,
      icon: formData.icon,
      banner: formData.banner,
      wallet: formData.wallet,
      bio: formData.bio,
      projectType: formData.projectType,
      attachments: formData.attachments,
    });

    try {
      const response = await axios.post('/api/submit-project', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);

      // Limpar campos de arquivo
      setFormData({
        ...formData,
        icon: null,
        banner: null,
        attachments: [],
      });

      // Limpar os campos de arquivo no formulário
      document.getElementById('icon').value = '';
      document.getElementById('banner').value = '';
      document.getElementById('attachments').value = '';

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <><div className={styles.formContainer}>
      <p className={styles.title}>Envie o seu projeto</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="icon">Ícone</label>
          <input
            type="file"
            name="icon"
            id="icon"
            onChange={handleChange}
            className={`${styles.input} ${styles.inputfile}`} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="banner">Banner</label>
          <input
            type="file"
            name="banner"
            id="banner"
            onChange={handleChange}
            className={`${styles.input} ${styles.inputfile}`} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="wallet">Wallet</label>
          <input
            type="text"
            name="wallet"
            id="wallet"
            value={formData.wallet}
            onChange={handleChange}
            className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="projectType">Qual é o tipo do projeto</label>
          <select
            name="projectType"
            id="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={styles.select}
          >
            <option className={styles.option} value="social">Social</option>
            <option className={styles.option} value="private">Privado</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="attachments">Anexar arquivos</label>
          <input
            type="file"
            name="attachments"
            id="attachments"
            multiple
            onChange={handleChange}
            className={`${styles.input} ${styles.inputfile}`} />
        </div>
        <div className={styles.formGroup}>
          <button
            type="submit"
            className={styles.button}
          >
            Enviar
          </button>
        </div>
      </form>
    </div><Footer /></>
  );
}