---
layout: 'base.njk'
slide_number: 36
slide_prev: 'slide_035/'
slide_next: 'slide_037/'
section_title: 'How do we change content?'
slide_title: System Tables
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Shows 'metadata' (data about data)
Some of the concepts in this slide will be introduced later in this section

<table>
  <tr>
    <th>System Table</th>
    <th>Description</th>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <td>pg_database</td>
    <td>details about every database on the server</td>
  </tr>
  <tr>
    <td>pg_tables</td>
    <td>details about every table on the server</td>
  </tr>
  <tr>
    <td>pg_stats</td>
    <td>summary of the contents of every column in a table</td>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
  </tr>

  <tr>
    <td>pg_views</td>
    <td>every view in the database, including system views</td>
  </tr>
  <tr>
    <td>pg_indexes</td>
    <td>every index on the server</td>
  </tr>
  <tr>
    <td>pg_user</td>
    <td>every user on the server</td>
  </tr>
  <tr>
    <td>pg_locks</td>
    <td>every lock taken in a transaction</td>
  </tr>
</table>

<hr />


</section>

<section class="slide__images">
<caption>1. Products table arranged in pages</caption>
<img src="{{ '../../images/004_Pages_Example.png' | url }}" />


</section>
