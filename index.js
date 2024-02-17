document.addEventListener("DOMContentLoaded", function () {
  recordingInterval = null;
  const textArea = document.querySelector("textarea");
  const fileInput = document.getElementById("fileInput");
  const audioPlayer = document.getElementById("audioPlayer");
  const fileInputLabel = document.getElementById("fileInputLabel");
  const filePreview = document.getElementById("filePreview");
  const deleteRecordingButton = document.getElementById(
    "deleteRecordingButton"
  );
  const fileInputContainer = document.getElementById("fileInputContainer");
  const fileActions = document.getElementById("fileActions");

  fileInputLabel.addEventListener("dragenter", () => {
    fileInputLabel.classList.add("drag-over");
    fileInputLabel.textContent = "Drop Files Here!";
  });

  fileInputLabel.addEventListener("dragleave", () => {
    fileInputLabel.classList.remove("drag-over");
    fileInputLabel.textContent =
      "Drag & Drop your image or video here, or click to browse";
  });

  fileInputLabel.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileInputLabel.textContent = "Drop Files Here!";
  });

  textArea.addEventListener("input", () => {
    checkButtonState();
  });

  fileInputLabel.addEventListener("drop", (e) => {
    e.preventDefault();
    fileInputLabel.classList.remove("drag-over");
    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (
        file.type.startsWith("image/") ||
        file.type.startsWith("video/") ||
        file.type.startsWith("audio/")
      ) {
        handleFileUpload(file);
        if (file.type.startsWith("audio/")) {
          const recordButton = document.getElementById("recordButton");
          recordButton.style.display = "none";
          deleteRecordingButton.style.display = "block";
          fileInputLabel.textContent =
            "Drag & Drop your image or video here, or click to browse";
          deleteRecordingButton.innerHTML = "Delete Audio";
        }
      } else {
        Swal.fire({
          title: "Error",
          text: "File yang diupload harus berupa gambar atau video",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  });

  fileInput.addEventListener("change", (fileInputan) => {
    if (fileInputan.target.files.length > 0) {
      const file = fileInputan.target.files[0];
      if (
        file.type.startsWith("image/") ||
        file.type.startsWith("video/") ||
        file.type.startsWith("audio/")
      ) {
        handleFileUpload(file);
      } else {
        Swal.fire({
          title: "Error",
          text: "File yang diupload harus berupa gambar atau video",
          icon: "error",
          confirmButtonText: "OK",
        });
        fileInputLabel.innerHTML =
          "Drag & Drop your image or video here, or click to browse";
        return;
      }
    }
  });

  const previewImage = document.getElementById("previewImage");

  previewImage.addEventListener("click", () => {
    toggleActions();
  });

  function checkButtonState() {
    const textArea = document.querySelector("textarea");
    if (textArea.value !== "") {
      submitButton.removeAttribute("disabled");
    } else if (textArea.value === "") {
      submitButton.setAttribute("disabled", "true");
    } else if (fileInput.files.length > 0) {
      submitButton.removeAttribute("disabled");
    } else if (audioPlayer.src.includes("mp3")) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "true");
    }
  }
});

let mediaRecorder;
let audioChunks = [];
let isRecording = false;

async function startRecording() {
  submitButton.setAttribute("disabled", "true");
  textArea.setAttribute("disabled", "true");
  deleteRecordingButton.style.display = "none";
  fileInputLabel.style.display = "none";
  const recordButton = document.getElementById("recordButton");
  if (
    recordButton.innerHTML === '<i class="fas fa-microphone"></i> Update Audio'
  ) {
    audioPlayer.style.display = "none";
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      handleFileUpload(audioBlob);
      audioChunks = [];
      stream.getTracks().forEach((track) => track.stop());
    };

    mediaRecorder.start();
    isRecording = true;
    recordingStartTime = Date.now();
    recordingInterval = setInterval(updateAudioStatus, 1000);
  } catch (error) {
    console.error("Error accessing microphone:", error);
  }
}

function stopRecording() {
  submitButton.removeAttribute("disabled");
  textArea.removeAttribute("disabled");
  if (mediaRecorder && isRecording) {
    mediaRecorder.stop();
    isRecording = false;
    clearInterval(recordingInterval);
    elapsedTimeInSeconds = 0;
    updateAudioStatus();
    deleteRecordingButton.style.display = "block";
  }
}

function deleteRecording() {
  if (recordingInterval !== null) {
    const recordButton = document.getElementById("recordButton");
    const audioStatusText = document.getElementById("audioStatus");
    recordButton.innerHTML = '<i class="fas fa-microphone"></i> Record Audio';
    mediaRecorder = null;
    audioChunks = [];
    isRecording = false;
    clearInterval(recordingInterval);
    elapsedTimeInSeconds = 0;
    handleFileUpload(null);
    submitButton.setAttribute("disabled", "true");
    deleteRecordingButton.style.display = "none";
    audioPlayer.src = "";
    audioPlayer.style.display = "none";
    audioStatusText.innerHTML = "";
  } else {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = "";
    audioPlayer.style.display = "none";
    deleteRecordingButton.style.display = "none";
    fileInputLabel.style.display = "flex";
    recordButton.style.display = "block";
  }
}

function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

let recordingStartTime;

function updateAudioStatus() {
  const audioStatus = document.getElementById("audioStatus");
  const recordButton = document.getElementById("recordButton");

  if (isRecording) {
    elapsedTimeInSeconds = Math.floor((Date.now() - recordingStartTime) / 1000);

    const minutes = Math.floor(elapsedTimeInSeconds / 60);
    const seconds = elapsedTimeInSeconds % 60;

    recordButton.style.backgroundColor = "#dc3545";
    audioStatus.innerHTML = `Recording audio: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
    recordButton.innerHTML = '<i class="fas fa-stop"></i> Stop Recording';
  } else {
    audioStatus.innerHTML = "Audio recording stopped.";
    recordButton.style.backgroundColor = "";
    recordButton.innerHTML = '<i class="fas fa-microphone"></i> Update Audio';
  }
}

async function submitForm() {
  const textAreaValue = document.querySelector("textarea").value.trim();
  const textArea = document.getElementById("textArea");
  const fileInput = document.getElementById("fileInput");
  const audioPlayer = document.getElementById("audioPlayer");
  const numberInput1 = document.getElementById("phone");
  const numberInput2 = document.getElementById("phone2");

  if (numberInput1.value === "" || numberInput2.value === "") {
    Swal.fire({
      title: "Error",
      text: "Nomor tidak boleh kosong",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  if (numberInput1.value === numberInput2.value) {
    Swal.fire({
      title: "Error",
      text: "Nomor pengirim dan penerima tidak boleh sama",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  const { data } = await axios.get(
    "http://0.tcp.ap.ngrok.io:12719/ceknomoractive/" + numberInput1.value
  );
  if (data.status !== "Nomor Ditemukan")
    return Swal.fire({
      title: "Error",
      text: "Nomor Tidak Ditemukan",
      icon: "error",
      confirmButtonText: "OK",
    });
  const response = await axios.get(
    "http://0.tcp.ap.ngrok.io:12719/ceknomoractive/" + numberInput2.value
  );
  if (response.data.status !== "Nomor Ditemukan")
    return Swal.fire({
      title: "Error",
      text: "Nomor Tujuan Tidak Ditemukan",
      icon: "error",
      confirmButtonText: "OK",
    });

  if (textAreaValue === "") {
    Swal.fire({
      title: "Error",
      text: "Pesan tidak boleh kosong",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  const uploadManager = new Bytescale.UploadManager({
    apiKey: "public_FW25buT65cd3vnbpp7r81pwyCPLn",
  });

  let date = new Date();

  let obj = {
    from: numberInput1.value,
    to: numberInput2.value,
    tanggal: date,
    caption: null,
    image: null,
    audio: null,
  };

  if (textAreaValue !== "") {
    obj.caption = textAreaValue;
  }

  var cekToxic = await _filterBadWord(obj.caption);
  if (cekToxic) {
    textArea.value = "";
    playErrorSound();
    Swal.fire({
      title: "Error",
      text: "Toxic Mulu Heran Gua",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  document.getElementById("loadingOverlay").style.display = "flex";

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const { fileUrl, filePath } = await uploadManager.upload({
      data: file,
    });
    obj.image = fileUrl;
  }

  const randomAudio = Math.random().toString(36).substring(2, 15);

  if (audioPlayer.src.includes("blob")) {
    const audioFile = await fetch(audioPlayer.src)
      .then((response) => response.blob())
      .then((blob) => new File([blob], `${randomAudio}.mp3`));
    const { fileUrl, filePath } = await uploadManager.upload({
      data: audioFile,
    });
    obj.audio = fileUrl;
  }

  fetch("http://0.tcp.ap.ngrok.io:12719/sendmessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(async (response) => {
    if (response.ok) {
      await Swal.fire({
        title: "Pesan Terkirim",
        text: "Cek Balasan Di di Whatsapp ya!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1200,
      });
      document.getElementById("loadingOverlay").style.display = "none";
      location.reload();
    }
  });

  document.getElementById("myForm").reset();
}

function handleFileUpload(file) {
  const fileInputLabel = document.getElementById("fileInputLabel");
  const fileInput = document.getElementById("fileInput");
  const filePreview = document.getElementById("filePreview");
  const audioButton = document.getElementById("recordButton");
  const fileActions = document.getElementById("fileActions");
  const audioPlayer = document.getElementById("audioPlayer");

  if (file) {
    fileInputLabel.style.display = "none";
    filePreview.style.display = "flex";
    fileActions.style.display = "none";

    if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
      audioPlayer.src = "";
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        img.crossOrigin = "Anonymous";
        nsfwjs.load().then((model) => {
          model.classify(img).then((predictions) => {
            if (
              predictions[0].className === "Neutral" ||
              predictions[0].className === "Drawing"
            ) {
              const previewImage = document.getElementById("previewImage");
              previewImage.src = event.target.result;
              previewImage.style.display = "flex";
              previewImage.style.filter = "brightness(100%)";
              audioPlayer.style.display = "none";
              audioButton.style.display = "none";
              fileInput.src = event.target.result;
            } else {
              Swal.fire({
                title: "Error",
                text: "Gambar tidak boleh mengandung unsur pornografi",
                icon: "error",
                confirmButtonText: "OK",
              });
              deleteFile();
            }
          });
        });
      };

      reader.readAsDataURL(file);
    } else if (file.type.startsWith("audio/")) {
      audioPlayer.src = URL.createObjectURL(file);
      audioPlayer.style.display = "flex";
      const previewImage = document.getElementById("previewImage");
      previewImage.style.display = "none";
    }
  } else {
    fileInputLabel.style.display = "flex";
    filePreview.style.display = "none";
    fileActions.style.display = "none";
    document.getElementById("previewImage").src = "placeholder-image.jpg";
  }
  const submitButton = document.getElementById("submitButton");
  submitButton.removeAttribute("disabled");
}

function editFile() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

function toggleActions() {
  const fileActions = document.getElementById("fileActions");
  const previewImage = document.getElementById("previewImage");

  if (fileActions.style.display === "none") {
    fileActions.style.display = "flex";
    previewImage.style.filter = "brightness(50%)";
  } else {
    fileActions.style.display = "none";
    previewImage.style.filter = "brightness(100%)";
  }
}

function playErrorSound() {
  var audio = new Audio(
    "https://upcdn.io/FW25buT/raw/uploads/2024/02/14/4kpTzNXMHe-34mcpvomri6.mp3"
  );
  audio.play();
}

function deleteFile() {
  const fileInputLabel = document.getElementById("fileInputLabel");
  const filePreview = document.getElementById("filePreview");
  const recordButton = document.getElementById("recordButton");
  const fileActions = document.getElementById("fileActions");

  fileInputLabel.innerHTML =
    "Drag & Drop your image or video here, or click to browse";

  submitButton.setAttribute("disabled", "true");
  fileInputLabel.style.display = "flex";
  recordButton.style.display = "block";
  filePreview.style.display = "none";
  fileActions.style.display = "none";
  document.getElementById("fileInput").value = "";
}
