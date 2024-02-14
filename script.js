const envelope = document.querySelector('#envelope')
const frames = document.querySelectorAll('.frames > div')
const frameCount = frames.length
const frameDuration = 1000
let frameIndex = 0

function openEnvelope()
{
  envelope.dataset.state = 'opening'
frames.forEach(
    (frame, index) => {
        setTimeout(
            () => {
                frame.classList.add('frame');
                if (index === frameCount - 1) {
                    envelope.dataset.state = 'opened';
                }
            }, frameDuration * index
        );
    }
);
}
function resetEnvelope()
        {
            envelope.dataset.state = 'closing'
    frames.forEach(
        (frame, index) => {
            setTimeout(
                () => {
                    frame.classList.remove('frame');
                    if (index === frameCount - 1) {
                        envelope.dataset.state = 'closed';
                    }
                }, frameDuration * index
            );
        }
    );
    }
document.querySelector('#openEnvelope').addEventListener('click', () => openEnvelope());
document.querySelector('#resetEnvelope').addEventListener('click', () => resetEnvelope());

// Automatically open the envelope after a delay
setTimeout
  (
    () => {
      openEnvelope()
    }, 3000
  )