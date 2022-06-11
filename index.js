async function save( blob ) {

    // create handle to a local file chosen by the user
    const handle = await window.showSaveFilePicker();
  
    // create writable stream
    const stream = await handle.createWritable();
  
    // write the data
    await stream.write(blob);
  
    // save and close the file
    await stream.close();
  }
  