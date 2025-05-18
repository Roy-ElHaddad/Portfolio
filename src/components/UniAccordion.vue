<template>
  <div
    class="p-6 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-rose-600 ">Education</h5>
    <Accordion value="0">
      <AccordionPanel value="0">
        <AccordionHeader>
          Institut des Sciences et Techniques des Yvelines - Masters in Software Engineering
        </AccordionHeader>
        <AccordionContent>
          <p>Learned absolutly nothing</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>
          American University of Science and Technology - Bachelors in Computer and Communication
          Engineering
        </AccordionHeader>
        <AccordionContent>
          <p>From 2019-2021 I studied at AUST and learned a lot of things</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>
          Colleges des Peres Antonins - French Baccalaureate in General Sciences
        </AccordionHeader>
        <AccordionContent>
          <p>2018 akalna kousa honik</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
</script>
